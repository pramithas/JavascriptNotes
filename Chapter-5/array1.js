let marks = [34, 56, 87, 98, 98, 99, 100, 43];

// accessing array elements.
console.log(marks[0]);

// accessing out of bound array elements will give undefined.
console.log(marks[99]);

// adding new value
marks[9] = 'Rita';

console.log(marks);

// changing value
marks[0] = 'Rohan';

console.log(marks);


// length of the array
console.log(marks.length);

// array can contain elements of different types, even objects.

let mixed = [34, "string", true, undefined, null, { name: "harry" }];
