// Practical 7 - Part F: Complete Example - Insert Data Using Node.js & Mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MERNDB");

const StudentSchema = new mongoose.Schema({
    rollNo: Number,
    name: String,
    course: String,
    marks: Number
});

const Student = mongoose.model("Student", StudentSchema);

const newStudent = new Student({
    rollNo: 3,
    name: "Amit",
    course: "MERN",
    marks: 88
});

newStudent.save()
.then(() => {
    console.log("Student Saved");
})
.catch(err => {
    console.log(err);
});
