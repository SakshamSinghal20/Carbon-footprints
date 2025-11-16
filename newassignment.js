// // 1
// let age = prompt("Enter your age")
// if (age < 18 ) {
//     console.log("Minor")
// } else if (age >= 18 && age < 60) {
//     console.log("Adult")
// } else if (age > 60) {
//     console.log("Senior")
// }

// // 2
// let nam = prompt("enter your name")
// let age1 = prompt("enter your age")
// let hobby = prompt("enter your hobby")
// console.log(`My name is ${nam}, I am ${age1} years old, and I enjoy
// ${hobby}`)

// // 3
// let n = Number(prompt("Enter a number:"));
// let result = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
// console.log(result);

// // 4
// function fizzBuzzArray(arr) {
//   for (let num of arr) {
//     let output = "";

//     if (num % 3 === 0) output += "Fizz";
//     if (num % 5 === 0) output += "Buzz";

//     console.log(output || num);
//   }
// }
// fizzBuzzArray([1,2,3,4,5,15,25]);

// 5 
const analyzeMarks = function(N, marks) {
  let total = 0;
  let highest = marks[0]; //first marks in array
  let lowest = marks[0]; //first marks

  for (let i = 0; i < N; i++) {
    total += marks[i];
    if (marks[i] > highest) highest = marks[i];
    if (marks[i] < lowest) lowest = marks[i];
  }
  let average =total / N;
  return {total,average,highest,lowest};
};

// total marks, average, highest, lowest



const marks = [70,80,90,60,85];
const result1 = analyzeMarks(marks.length, marks); //5, 5-marks
console.log(result1);






// 6
// function reverseArray(arr) {
//   let reversed =[];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4]));

// // 7
// function sum(...numbers) {
//   let total =0; 
//   for (let i=0; i<numbers.length; i++){
//     total += numbers[i];
//   }
//   return total;
// }

// console.log(sum(10,20,30));

// // 8
// function modifyByReference(arr) {
//   arr[0] = 99; // modifies the original
// }

// function modifyByValue(arr) {
//   let copy = [...arr]; // makes a copy
//   copy[0] = 55; // modifies only the copy
//   console.log("Inside modifyByValue:", copy);
// }

// let numbers = [1, 2, 3];
// console.log("Before:", numbers);

// modifyByValue(numbers);
// console.log("After modifyByValue:", numbers);

// modifyByReference(numbers);
// console.log("After modifyByReference:", numbers);

// // 9
// let number = [3,4,5,6,7];
// let doubled = number.map(num => num**2)
// let filter = doubled.filter(num => num>=25)
// console.log(filter)

// // 10
// let example = {
//   arr: [2, 4, 6, 8],
//   operation: "sum"
// };
// function calculate(example) {
//   let arr = example.arr;
//   let op = example.operation;
//   let result = 0;

//   if (op === "sum") {
//     result = arr.reduce((a, b) => a + b, 0);
//   } 
//   else if (op === "product") {
//     result = arr.reduce((a, b) => a * b, 1);
//   } 
//   else if (op === "average") {
//     result = arr.reduce((a, b) => a + b, 0) / arr.length;
//   } 
//   else {
//     result = "Invalid operation";
//   }
//   console.log(result);
// }
// calculate(example);
