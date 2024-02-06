// 1. Write a program to print the marks of a student in an object using for loop

let marks = {harry: 98, rohan: 70, aakash: 7};

for(let i in marks){
  console.log(marks[i]);
}

// other way

for(let i=0; i<Object.keys(marks).length; i++){
  console.log("The mark of "+Object.keys(marks)[i] + " is " +marks[Object.keys(marks)[i]]);
}