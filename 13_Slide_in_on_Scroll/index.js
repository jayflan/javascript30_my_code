const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'index-START.html'));
});
app.listen(port, () => console.log(`listening on port: ${port}.`));

app.use((req, res, next) => {
  const error = Error('Page Not Found.');
  error.status = 404;
  next(error);
});
