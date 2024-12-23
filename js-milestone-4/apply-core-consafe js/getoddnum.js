// function1

const numbers =[12, 212, 23, 322, 243, 345];

function getSumOfArray(numbers){
    
    let oddNumber = [];
    for(let i =0; i < numbers.length; i++){
      const index1 = i;
      const element1 = numbers[index1];
      if(element1 % 2 === 0){
       oddNumber.push(element1);

      }
    }
    return oddNumber;

}
  let result1 = getSumOfArray(numbers);
  console.log(result);

// function2  

  function getSumOfArray(oddNumber){
    let sum = 0;
    for(let i =0; i < oddNumber.length; i++){
      const index2 = i;
      const element2 =oddNumber[index2];
      sum = sum + element2;
    //   console.log( sum);
    }
    return sum;

}

 var result2 = getSumOfArray(oddNumber);
 console.log(result);

