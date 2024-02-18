const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3006;

app.use(bodyParser.json());

let counter = 0;

app.get('/', (req, res) => {
    res.json({counter });
});

app.post('/increment', (req, res) => {
    counter++;
    res.json({counter });
});

app.post('/decrement', (req, res) => {
    counter--;
    res.json({counter });
});

app.listen(PORT, () => {
    console.log(`Server is running on locolhost:${PORT}`);
});