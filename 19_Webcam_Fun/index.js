const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

/*
  Using browser sync server instead of express for this exercise
*/

// const app = express();

// app.use(express.static(path.join(__dirname, '.')));
// app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'index.html'))});
// app.listen(port, () => {console.log(`listening on port: ${port}`)});