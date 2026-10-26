let employee = {
    id: 101,
    name: "chaitanya",
    salary: 40000
};

employee.salary = 50000;

employee.department = "IT";

console.log("Employee Details:");
console.log(employee);

delete employee.id;

console.log("After Deleting ID:");
console.log(employee);