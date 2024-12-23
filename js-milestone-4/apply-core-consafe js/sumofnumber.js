//  1+2+3+4+5+6+7+8

function sumOfNumber(){
    let sum = 0;
    for(let i = 0; i <= 8; i++){
        sum = sum + i;
    }
    return sum;

}
 let result = sumOfNumber();
console.log(result);

// multiappliction 

function multiOfNumber(){
    let result = 1;
    for(let i=0; i<= 8; i++){
      result = result * i;

    }
    return result;
}
let finalResult = multiOfNumber();
console.log(finalResult);
