
const obj = {
    name: 'iqbal',
    age: 45,
    number : '01300261625',
}

const Name = obj.name;
const Age = obj.age;
const Number = obj.number;

// console.log(Name);
// console.log(Age);
// console.log(Number);

//  do this by distructuring 

const obj2 = {
    name : 'iqbal',
    age: 22,
    number: '01300261329',
    nid : 11127476,
}

const {name , age , number , nid} = obj2

console.log(name);
console.log(age);
console.log(number);
console.log(nid);

function getDuble(a , b){

    return [ a*2 , b*2];
}

const [ first , second ] = getDuble(4 , 5);
console.log(first);
console.log(second);
