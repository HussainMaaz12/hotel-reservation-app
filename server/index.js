const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const FRONTEND = process.env.FRONTEND_URL || "*";

app.use(cors({ origin: FRONTEND }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/reservations", require("./routes/reservations"));
app.use("/api/contact", require("./routes/contact"));

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle uncaught errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
