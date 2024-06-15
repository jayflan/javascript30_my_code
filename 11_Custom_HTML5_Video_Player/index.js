const express = require('express');
const path = require('path');
const port = 3001;
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, '.')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});