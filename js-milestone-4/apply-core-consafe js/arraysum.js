// sum array elements 

function getSumOfArray(numbers){
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
      const index = i;
      const element = numbers[index];
      sum = sum + element;
    //   console.log( sum);
    }
    return sum;

}
const numbers =[12, 212,23,322,243,345];


 var result = getSumOfArray(numbers);
 console.log(result);




