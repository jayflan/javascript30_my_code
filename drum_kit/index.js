const app = require("./app");
const port = process.env.port || 3030;

app.listen(port, ()=> console.log(`listening on port ${port}`));``
