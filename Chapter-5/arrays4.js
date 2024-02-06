let num = [3,4,1,2,7];

// Classical for loop
for(let i = 0; i < num.length; i++){
 // console.log(num[i]);
}

// using forEach
num.forEach( (element) => {
  //console.log(element* element)
})

// Array.from is used to create array from any other object.

let name = "Harry";
let a = Array.from(name);
a.forEach((element) => console.log(element));
//console.log(a);