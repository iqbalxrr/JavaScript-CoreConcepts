const math = Math.max( 12,45,488,8,57,77,);

console.log(math);

//  array er vitor thake jokhin max nirnoy korte hobe 
//  tokhon spread oparetor (...) diya korte hobe 

const numbers = [ 12, 34, 45, 455, 576, 34565];

const getMax = Math.max(...numbers);

console.log(getMax);


//  copy and set elements 

const num1 = [12, 23, 34, 45, 45, 56];

const num2 = num1 ;

num2.push(100);

console.log(num1);

console.log(num2);

// akoi man pawa jabe karon akta jaiga(refarence ) dhore rakhe then akoi man 2 jaigei bosiya dai ;

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a new array [1, 2, 3]
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]



//  copy and set  by spread oparater 

const numberArry = [23, 34, 45, 565, 67, 76]

const num2Array = [...numberArry];

num2Array.push(999999);

console.log(numberArry);
console.log(num2Array);

//  advance 

const num3Array = [...numbers , 999999];

console.log(num3Array);






