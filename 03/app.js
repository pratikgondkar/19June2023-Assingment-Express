const express = require('express');
const app = express();
const port = 3007;

app.get('/', (req, res) => {
    res.json({ msg: 'I Am Home Page!'});
});

app.get('/about', (req, res) => {
    res.json({ msg: 'I Am About page!'})
});

app.get('/contact', (req, res) => {
    res.json({ email: 'support@pwskills.com'});
});

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});