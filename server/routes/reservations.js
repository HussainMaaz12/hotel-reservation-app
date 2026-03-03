const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { saveReservation } = require("../db");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // use an App Password, not your real password
  },
});

router.post("/", async (req, res) => {
  const { name, email, phone, date, time, guests, request } = req.body;

  // Basic validation
  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 1. Email to the restaurant
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "reservations@elara-santorini.com",
      subject: `New Reservation — ${name}, ${guests} guests on ${date}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date} at ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Special Requests:</strong> ${request || "None"}</p>
      `,
    });

    // 2. Confirmation email to the guest
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your reservation at Elara — received",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for your reservation request. We have received your booking for <strong>${guests} guest(s)</strong> on <strong>${date} at ${time}</strong>.</p>
        <p>We will confirm within 2 hours.</p>
        <br/>
        <p>Warm regards,<br/>The Elara Team</p>
      `,
    });

    // 3. Save to local JSON file
    const saved = saveReservation({ name, email, phone, date, time, guests, request });
    res.status(200).json({ success: true, id: saved.id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed to send" });
  }
});

module.exports = router;