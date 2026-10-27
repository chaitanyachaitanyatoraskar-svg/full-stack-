// Practical 6 - Part B: Display a Message on the Browser Using Server Response

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

app.listen(3000, () => {
    console.log('Server Started');
});
