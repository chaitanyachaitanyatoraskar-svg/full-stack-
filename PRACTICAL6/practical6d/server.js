// Practical 6 - Part D: Send a JSON Response from the Server

const express = require('express');
const app = express();

app.get('/student', (req, res) => {
    res.json({
        id: 101,
        name: "Pradnya",
        course: "MERN Stack"
    });
});

app.listen(3000, () => {
    console.log('Server Running');
});
