const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config(path.resolve(__dirname, './env'));

const PORT = process.env.PORT;

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('Server failed to start!');
    return;
  }
  console.log(`Serving on port ${PORT}`);
});
