let testStr = "Pramithas";
console.log(testStr.toUpperCase());
console.log(testStr.toLowerCase());

//similar to substring() in java
console.log(testStr.slice(2,4));//am
console.log(testStr.slice(2)); //amithas


console.log(testStr.replace("pra","ram"))

let friend = "Aashma";

console.log(testStr.concat(" is a friend of ", friend, " alright"));

let fatString = "    Pra    ";
console.log(fatString);
console.log(fatString.trim())

// You cannot change the string as it is immutable
testStr[6]="X";
console.log(testStr);