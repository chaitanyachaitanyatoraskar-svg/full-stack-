let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num =>
    num * num);

let evenNumbers = numbers.filter(num =>
    num % 2 === 0);

let total = numbers.reduce((sum, num) =>
    sum + num, 0);

console.log("Original Array:", numbers);
console.log("Squares:", squares);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", total);