const express = require('express');
const app = express();
const path = require('path');

  // html route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

  // file connection path
app.use(express.static(path.join(__dirname, '.')));


module.exports = app;