let numbers = [123, 233, 244, 454, 223, 222];

function maxNumTest(numbers){

     let lergNum = numbers[0];

    for( let i = 0; i < numbers.length; i++){
         let indexElement = numbers[i];
       
         if(indexElement > lergNum){
            lergNum = indexElement

         }
    }
    return lergNum ;
    
}

let tollestNum = maxNumTest(numbers);

console.log(tollestNum);
