const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { saveContact } = require("../db");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "hello@elara-santorini.com",
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    // Save to local JSON file
    const saved = saveContact({ name, email, message });
    res.status(200).json({ success: true, id: saved.id });
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;




