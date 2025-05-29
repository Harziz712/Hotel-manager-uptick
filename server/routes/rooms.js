// server/routes/rooms.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/rooms.json');

// Helper functions
function readRooms() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeRooms(rooms) {
  fs.writeFileSync(dataPath, JSON.stringify(rooms, null, 2));
}

// GET all rooms
router.get('/', (req, res) => {
  const rooms = readRooms();
  res.json(rooms);
});

// POST a new room
router.post('/', (req, res) => {
  const { number, type, price } = req.body;
  if (!number || !type || !price) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const rooms = readRooms();
  const newRoom = {
    id: Date.now(),
    number,
    type,
    price: parseFloat(price),
  };

  rooms.push(newRoom);
  writeRooms(rooms);
  res.status(201).json(newRoom);
});

module.exports = router;
