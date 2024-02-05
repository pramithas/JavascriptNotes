//Q1. Add integer to a string variable.
let a = "Pramithas";
let b = 6;
console.log(a+ b);

/**
Adding number to a string variable will concatenate the number to the string.
*/

// Q2. Use typeof operator to find the datatype of the string in last question.
console.log(typeof(a+b));

// Q3. Create a const object in javascript. Can you change it to hold a number later? No.
const a1 = {
  name: "Pramithas",
  isPrinciple: false
};

//a1= 5; // this will give error.
// But, this is valid.

a1['friend'] = "Shubham";

// You can mutate the data within.

//Q5. Write a JS program to create a word-meaning dictionary of 5 words.

const myDict = {
  jalopy:"an old, decrepit, or unpretentious automobile.",
  Weltschmerz:"sorrow that one feels and accepts as one's necessary portion in life; sentimental pessimism.",
  risible:"(of a person or thing) able to be hurt or injured."
};

console.log(myDict.risible);