function factorial(number){
    let result =1;
    for(let i = number; i >= 1; i-- ){
        result = result * i;


    }
    return result;

}
let finalResult =factorial(7);
console.log(finalResult);