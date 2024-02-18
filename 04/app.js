const express = require('express');
const app = express();
port = 3008;

app.get('/random', (req, res) => {
    const RandomNumber = Math.floor(Math.random() * 100);
    res.json({ random: RandomNumber});
});

app.listen(port, () => {
    console.log(`server is running on localhost:${port}`);
});