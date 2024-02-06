let myArr = [1, 2, 3, 4, 6];

//console.log(myArr.toString());

let c = myArr.join("-");

//console.log(c, typeof c); // type is string.

let poppedElement = myArr.pop();
//console.log(myArr, poppedElement);  

let newArrLength = myArr.push(56);
//console.log(myArr);


let firstElem = myArr.shift();// removes first element.
//console.log(myArr, firstElem);

myArr.unshift(23); // adds element at the beginning.
console.log(myArr);
