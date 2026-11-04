
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, this is a Node.js project using Jenkins</h1>
        <h2>Version: 3.0.0</h2>
    `);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`);
});
