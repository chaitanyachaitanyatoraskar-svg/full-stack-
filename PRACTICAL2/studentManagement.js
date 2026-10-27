let students = [
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Priya", marks: 90 },
    { id: 3, name: "Amit", marks: 70 }
];

function displayStudents(studentArray) {
    studentArray.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`);
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
