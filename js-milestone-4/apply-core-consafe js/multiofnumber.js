function multiOfNumber(number){
    let result = 1;
    for(let i=1; i <= number; i++){
      result = result * i;

    }
    return result;
}
let finalResult = multiOfNumber(10);
console.log(finalResult);