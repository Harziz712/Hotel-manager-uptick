// server/index.js
const express = require('express');
const cors = require('cors');
const roomsRoute = require('./routes/rooms');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/rooms', roomsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
asjdn