// Practical 6: Node.js and Express Fundamentals
// Complete Program (Part F)

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/student', (req, res) => {
    res.json({
        id: 1,
        name: 'Rahul',
        course: 'MERN'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
