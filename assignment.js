// 1
let userName = prompt("enter your name");
console.log(`Hello, ${userName}! Welcome to JavaScript land.!`)

//2
let nums = prompt("enter a number");
console.log(`${nums*2}`)

// 3
let itm = prompt("Enter an item");
let pric = Number(prompt("Enter the price of the item"));

let cart = {
  item: itm,
  price: pric
};

console.log(`You added ${cart.item} worth ${cart.price} rupees to your cart 🛒`);

// 4
let nam = prompt("enter your name")
newName=nam.slice(0,3).toUpperCase()
console.log(newName+"inator")

// 5
let a = Number(prompt("enter the first number"))
let b = Number(prompt("enter the second number"))
console.log(`you have entered ${a} and ${b}`)
console.log(`Addition: ${a+b}`)
console.log(`Difference: ${a-b}`)
console.log(`Multiplication: ${a*b}`)
console.log(`Division: ${a/b}`)
console.log(`Remainder: ${a%b}`)

// 6
let marks = Number(prompt("enter your marks from 100"))
if (marks >= 90) {
    console.log("A grade");
} else if (marks >=75 && marks < 90) {
    console.log("B grade");
} else if (marks >=50 && marks < 75) {
    console.log("C grade");
} else if (marks < 50) {
    console.log("Fail");
}

// 7
let j=prompt("Are you hungry? (yes/no)")

let ans= (j.toLowerCase()==="yes") ? "🍕 Grab Pizza":"💻 Stay Coding";
console.log(ans)