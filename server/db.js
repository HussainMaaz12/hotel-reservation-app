const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const RESERVATIONS_FILE = path.join(DATA_DIR, "reservations.json");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");

// Helper: Read JSON file safely
function readJSON(file) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, "utf8"));
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
  }
  return [];
}

// Helper: Write JSON file
function writeJSON(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
    throw err;
  }
}

// Save reservation
function saveReservation(reservationData) {
  const reservations = readJSON(RESERVATIONS_FILE);
  const newReservation = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...reservationData,
  };
  reservations.push(newReservation);
  writeJSON(RESERVATIONS_FILE, reservations);
  return newReservation;
}

// Save contact
function saveContact(contactData) {
  const contacts = readJSON(CONTACTS_FILE);
  const newContact = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...contactData,
  };
  contacts.push(newContact);
  writeJSON(CONTACTS_FILE, contacts);
  return newContact;
}

// Get all reservations
function getAllReservations() {
  return readJSON(RESERVATIONS_FILE);
}

// Get all contacts
function getAllContacts() {
  return readJSON(CONTACTS_FILE);
}

module.exports = {
  saveReservation,
  saveContact,
  getAllReservations,
  getAllContacts,
};
