const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json()); //req.body
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`App runs on port ${PORT}`);
});