const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index-START.html'));
});

app.use(express.static(path.join(__dirname, ".")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



