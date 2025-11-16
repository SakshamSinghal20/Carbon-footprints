// //const a=10;
// //a=12; error

// function abc(){
//     if (true){
//         var x=100;
//     }
//     console.log(x);
// }
// abc()

// //primitive datatypes
// let str='polaris';
// let num=2;
// let bool=true;
// let undef=undefined;
// let nulEx = null;

// //non primitive datatypes i.e. array,object,function
// const arrofFruits=["apple","mango","grapes"];
 
// const obj = {
//     "id" : 2,
//     "name":"sak"
// }

// // fName();

// //typeof operator
// console.log(typeof(str));

// //string literals
// let names="sak";
// let age="20";

// console.log("output - name length:",names, names.length)
// console.log("to upper case:", names.toUpperCase());
// let finalString = `My name is ${names}, my age is ${age}`;
// console.log(finalString)
// //slice
// let stu ="    my name is sak   "
// console.log("slice method:", stu.slice(0,6))

// //includes
// console.log("slice method:", stu.includes('saks'))

// //trim 
// console.log("slice method:",stu.trim())

// //cancatination
// console.log("slice method:"+" my slice");

// //operators
// //arithmetic operators(+,-,*,%,/)
// let sim1=10;
// let sin2=20;

// let checkIfEven = sim1 % 2===1;
// console.log(checkIfEven)

// //assignment operator(=,+=,-=,*=,/=,%=)
// let nu=10;
// let add = 20;
// add +=nu;
// console.log(add)

// //comparison operators - used to compare values(==,===,!==,>,<=)
// let kim = 40;
// let kin = "30";
// console.log(kim==kin)
// if(kim>kin){
//     console.log("true")
// } else{
//     console.log("false")
// }

// //logical operators(&&,||)
// if (kim >=10 && kin <=20){
//     console.log("True")
// } else {
//     console.log("true")
// }

// //unary operator

// //post increment
// let z=10;
// let y=z++;
// console.log(y);
// console.log(z);

// //pre increment
// let t=10;
// let l=++t;
// console.log(l);
// console.log(t);

// //pre decrement
// let j=20;
// let k=--j;

// //post decrement
// let m=20;
// let w=m--;

// //ternary operaator
// if (y > z){
//     console.log("true");
// } else {
//     console.log("false");
// }
// let myVar = (y > z) ? "console.log('true')": "console.log(false)";

// //conditional statements(if,if-else,if-ladder,nested-if,switch,short-circuit)
// let num1 = 20;
// let num2 = 10;
// let condition = num1 => num2;
// if (condition){
//     //print
// }
// //if-else
// if(condition){
//     //true-execute this block of code
// } else{
//     //false-execute this block of code
// }
// //if-else ladder
// // if(condition){

// // } else if(condition1){

// // } else if(condition2){

// // } else if(condition3){

// // // }
// // // else{

// // // }

// // //switch
// // let marks = 55;
// // switch(marks){
// //     case 50:
// //         console.log("grade b");
// //         break;
// //     case 60:
// //         console.log("grade a");
// //         break;
// //     default:
// //         console.log("invalid data")
// // }

// // //short circuiting &&,||
// // // { condition && (
// // //     <p>this is text</p>
// // //     )
// // // }
// // // // if((num1 >=10) && (num2 <= 20))
// // // if((num1 >= 10) || (num2 <= 20))

// // let userType =2;
// // // 1-student2 -faculty3-peon 
// // switch(userType){
// //     case 1:
// //         console.log("student login");
// //         break;
// //     case 2:
// //         console.log("faculty login");
// //         break;
// //     case 3:
// //         console.log("peon login");
// //         break
// //     deafult:
// //     console.log("invalid login")
// // }

// // //loops-(for,while,do-while,for-in,for-of)
// // //for loop: initialize;condition;inc/dec{}
// // for(let i=0; i<=5; i++){
// //     console.log(i)
// // }

// // //while loop
// // let i =0;
// // while(i<=5){
// //     console.log(i);
// //     i++;
// // }

// // //do-while loop
// // let q =6;
// // do{
// //     console.log(q);
// //     q++;
// // }while(q<=5)

// // //iteration
// // let fruits = ["apple","mango","grape"];
// // for(let fruit of fruits){
// //     console.log(fruit);
// // }

// // //objects
// // let oj ={
// //     fName:"sak",
// //     lName:"singhal",
// //     age:"20"
// // }
// // for(let key in oj){
// //     console.log(key +": "+ oj[key]);
// // }

// // // let userInput = prompt("enter your name");
// // // console.log(userInput)

// // // let dotInput=prompt("input a fruit")
// // // switch(dotInput){
// // //     case "apple":
// // //         console.log("USER SELECTED APPLE");
// // //         break;
// // //     case "mango":
// // //         console.log("USER SELECTED MANGO");
// // //         break;
// // //     default:
// // //         console.log("USER SELECTED FRUIT THAT IS NOT AVAILABLE");
// // // }

// // //arrays
// // let arr =[10,20,30];
// // console.log("arr+",arr);

// // let arr1 =new Array(10);
// // arr1[0]="name";
// // for(let i=0; i<=10; i++){
// //     arr1[i] =i;
// // }
// // console.log("arr1+",arr1)

// // let ar =  [10,20,30];
// // ar.push(40);
// // // ar.pop(20);
// // ar.unshift();
// // ar.shift();
// // console.log(ar)

// // //slice
// // let a=[10,20,30,40,50,60,70,80];
// // a.slice(1,5);
// // console.log(a +":"+part);

// //splice
// // a.splice(8,90,100,110,120);
// // console.log(a);

// //concat
// // let arrs= [10,20,30]
// // let arr2= [40,50,60]
// // let arr3= [70,80,90]
// // let mergeArrays = arrs.concat(arr2,arr3)
// // console.log(mergeArrays)

// //indexof() and include
// // let fu =[10,20,30]
// // let idx = fu.indexOf(30);
// // console.log(idx);

// // let ck = [10,20,30]
// // let ax = ck.includes(40);
// // console.log(ax)

// //functions
// function add(a,b){
//     return a+b;
// }
// let vc = add(10,20);
// let cv = add(30,40);
// console.log(vc + "," + cv);

// arrow function
// () => {}
// const add = (a,b) => a+b;
// console.log(add(10,20));

// var n =2;
// function multiplyNum(n){
//     let mul = n*n;
//     return mul;
// }
// let multiplyN = multiplyNum(n);
// let multiplyFour = multiplyNum(4);
// console.log(multiplyN+":"+multiplyFour)

 //split and join()
//  let str = "hi";
//  console.log(str.split(""))
//  let arr = [10,20,30,40];
//  let splitArr = arr.join("");
//  console.log(splitArr)

//rest and spread operator
// function details(a,b, ...others){
//     console.log(a)
//     console.log(b)
//     console.log(others)
// }
// details(10,20,30,40,50)

//mix normal and rest parameter
// function myDetails(name,age, ...hobbies){
//     console.log(`My name is ${name}, my age is ${age}`);
//     console.log(`My Hobbies are${hobbies.join(", ")}`);
// }
// myDetails("sak", 20, "sleeping", "eating", "coding");

//object
// let obj = {
//     fname: "sak",
//     lname: "sin",
// }
// let obj1 = {
//     empId:123
// }
// let combinedObj = {...obj, ...obj1}
// console.log("object:::",combinedObj)

//objects and objects creation
// let car = {
//     model: "x4",
//     brand: "bmw",
//     color: "black",
//     accelerate(){
//         console.log("accelerate method/func")
//     },
//     start(){
//         console.log("start")
//     }
// }

//new object()-constructor
// let myCar = new Object({name: "mercedes"});
// console.log