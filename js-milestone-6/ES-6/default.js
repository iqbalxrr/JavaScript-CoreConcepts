//  default use kora hoi jokhon kono man undefind thakbe 

function sum( num1 , num2 = 0){

    const result = num1 + num2 ;
    console.log( num1 , num2 , result)
    return result;
}

// const result = sum( 24, 55);
const result = sum(24);

// const result = sum();

//  string er somei default hisab a eamty string dite hobe 

function fullname( first , last = ''){

    const name = first + ' ' + last;

    console.log(name);

    return name;
}


// array r somey default hisab a eamty array [] dite hobe

function numbers(age = []){

}


function person(human = {}){
    
}
