var first = 4 ;
var second = 5;

// first = second;
// second = first;

var swap = first;

first = second;
second = swap;

//  second method 

[first, second] = [second, first];

console.log(first,second);

