// Practical 6 - Part A: Install Express and Create a Simple Server

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
