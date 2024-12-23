
// Removes elements from an array 
// and, if necessary, inserts new elements in   their place, 
// returning the deleted elements.
// change array elements

var age = [12, 23, 34, 45, 34, 56, 65, 24, 60]

var spliceAge = age.splice(2, 5);
console.log(spliceAge);

// output 
// [ 34, 45, 34, 56, 56 ]

console.log(age);

// output
// [ 12, 23, 65 ]

// inserts new elements in   their place

var spliceAge = age.splice(2, 5, 23, 24, 32);
console.log(spliceAge);

// output
//  