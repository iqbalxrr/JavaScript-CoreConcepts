// function expresstion 

const add = function(a , b){

    return a + b ;

}

const sum = add( 4 ,5);

 console.log(sum);



//  arrow function 

 const add3 = ( a , b) => ( a + b);

 const multyapply = ( num1 , num2 , num3 , num4) => ( num1* num2*num3*num4);

 const multy = multyapply(4,5,8,9)

 const sum1 = add3( 4 ,5);

 console.log(multy);

 console.log(sum1);

//  one perameter or single perametar 
//  more arrow function 

 const student = {
    name: 'iqbal',
    age: 22,
    id : 12334
 }

 const getAge = (person) => person.age;

 const age = getAge(student);

 console.log(age);


//  

const getThird = (number) => number[2];

const third = getThird([12, 34, 56, 56]);

console.log(third);

//  no perameter 

const getPi = () => Math.PI ;

console.log(getPi());

//  large arrow function 

const doMath = ( x,y,z) => {
    const sum = x + y+ z ;
     
    const multy = x * y* z ;

    const result = sum + multy ;
    
    return result ;

}

const mathResult = doMath( 4,7,4)
console.log(mathResult);