 const express = require('express');
const path = require('path');
 const app = express();

 //html route
 app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
 })

 app.use(express.static(path.join(__dirname, ".")))

 module.exports = app;

