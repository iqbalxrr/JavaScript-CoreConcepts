const country = 'bangladesh';

const isIndependent = true;

var age = [11, 22, 13, 34, 55, 56];

function add(num1, num2){
    return num1 + num2;
}

var students = {
    nam: 'agun',
    id:1213321,
    roll: 23332344,
    age: 34,
    relation:' single'
}
console.log(typeof (students));
console.log(typeof (age));
console.log(typeof (add));
console.log(typeof (country));
console.log(typeof (isIndependent));

//cheak array..using >>array.isArray()..............

console.log(Array.isArray(age));


//  cheak array elements using >> includes()

console.log(age.includes(22));


//connect more array using >>> concat.() ....

var age = [11, 22, 13, 34, 55, 56];

var newAge = [22, 32, 34, 35, 43, 56]

var totalAge = newAge.concat(age);

console.log(totalAge);

// output
[
    22, 32, 34, 35, 43,
    56, 11, 22, 13, 34,
    55, 56
  ]