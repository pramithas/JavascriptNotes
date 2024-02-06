// 1. Normal sorting
let num = [551,22,3,14,5,6,7,8,229]; // does string sorting
num.sort();
//console.log(num);

// 2. Sorting using compare function  

let compare = (a,b) => {
  return a - b;
}

num.sort(compare);
console.log(num);

// Reverse  
num.reverse();
console.log(num);

// splice(start, no of item to be removed, new array elems to be added)
num.splice(2,3,1021,1022,1023);
console.log(num);