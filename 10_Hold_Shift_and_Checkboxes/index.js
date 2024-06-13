const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-START.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
