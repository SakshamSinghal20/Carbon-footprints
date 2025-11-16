// 1

// 2
let a= Number(prompt("enter 1st number"))
let b= Number(prompt("enter 2nd number"))
let c= Number(prompt("enter 3rd number"))
if (a>b && a>c){
    console.log("a, is the largest number")
} else if (b>c && b>a){
        console.log("b, is the largest number")
} else if (c>a && c>b){
        console.log(`${c}, is the largest number`)
}

// 3
let arr = []
arr.push("apple");
arr.push("banana");
arr.push("mango");
console.log(arr)
arr.pop()
console.log(arr)

// 4
let nums = Number(prompt("Enter a number"))
if(nums>0){
    console.log("Positive")
} else if(nums<0){
    console.log("Negative")
} else if(nums==0){
    console.log("zero")
}

// 5
for(i=1; i<=20; i++){
    if(i%2==0){
            console.log(i)
    }
}

// 6
let arr1 = [3,-2,7,-5,10]
let total=0;
for(let i=0; i<arr1.length; i++) {
    if (arr[i]>0) {
        total+=arr1[i];
    }
}
console.log(total);

// 7
let nums3 = Number(prompt("enter a number"))
for (let i=0; i<=10; i++) {
    let result = nums3 * i;
    console.log(nums3 + "x" +i+ "="+result);
}

// 8 
let arrr =[2,3,4,5]
let result = arrr
.map(x => x**2)
.filter(x => x>10)
console.log(result)

// 9
let arr4 = [12, 45, 7, 23, 56, 89, 5]
let highest = arr[0];
for (let i=1; i<arr.length; i++) {
    if (arr[i]>highest) {
        highest = arr[i];
    }
}
console.log("highest number is:", highest)

// 10
let num2 = 1234;
let reversed = 0;

while (num2 > 0) {
  let digit = num2 % 10;      // Get last digit
  reversed = reversed * 10 + digit; // Add digit to reversed
  num2 = Math.floor(num2 / 10); // Remove last digit
}

console.log(reversed); // 4321

// 11
