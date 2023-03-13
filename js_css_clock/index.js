const app = require('./app');
const port = process.env.port || 3000;

  // server listening function
app.listen(port, () => console.log(`listening on port ${port}`));
