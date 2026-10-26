let students = [
    { id: 1, name: "chaitanya", marks: 90 },
    { id: 2, name: "raj", marks: 70 },
    { id: 3, name: "arjun", marks: 88 }
];

function displayStudents(studentArray) {
    studentArray.forEach(student => {
        console.log(
            `ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`
        );
    });
}

function calculateAverage(studentArray) {
    let totalMarks = studentArray.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    return totalMarks / studentArray.length;
}

console.log("Student Details:");
displayStudents(students);

console.log("Average Marks =", calculateAverage(students));