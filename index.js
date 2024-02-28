// app.js
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const name = process.env.NAME || 'Ankush';

app.get('/', (req, res) => {
  res.send(`Hello nodejs, running on port ${port}`);
});

app.get('/name', (req, res) => {
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


