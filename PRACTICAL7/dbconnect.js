// Practical 7 - Part F (Step 3): Connect MongoDB with Node.js using Mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MERNDB")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log(err);
});
