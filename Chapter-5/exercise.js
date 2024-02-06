// Chapter 5 practice set.

// Q1. Create an array of numbers and take input from the user to add numbers to this array.

// let arr= [1,2,3,4,5,6,7,83];
// let a = prompt("Enter a number");
// a=Number.parseInt(a);
// arr.push(a);


// Q2. Keep adding numbers to the array in Q1 until 0 is added to the array.
let arr1= [1,2,3,4,5,6,7,83];


// do{
//   inp = prompt("Enter a number");
//   arr1.push(inp);
//   inp=Number.parseInt(inp);
// }while(inp!=0);

// Q3. Filter for numbers divisible by 10 from a given array.

let arr2= [10,20,3,40,5,6,7,83];

let filtered = arr2.filter((x) => x %10 == 0);
//console.log(filtered, typeof filtered);


// Q4. Create an array of square of given numbers.

let sqArray = arr2.map((elem) => elem*elem);
//console.log(sqArray);

//Q5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number)

let arr3 = [1,2,3,4,5];
let fact = arr3.reduce((x,y) => x*y);
console.log(fact);


