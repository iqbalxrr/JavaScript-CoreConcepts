// function reverseString(text){
//     let reversed = ' ';
//     for(let i = text.length-1; i >= 0; i--){
//         let indexElement = text[i];
//         console.log(indexElement);
//         reversed = reversed + indexElement;
//         console.log(indexElement, reversed);

//     }
//     return reversed;

// }
// // let myString = 'iam a good student';

// let reverseds = reverseString(myString);

// console.log(reverseds);


const myString = 'iam a good student '

function reverseWords(str){
   let words = str.split(' ');
  
   let result =[];
   // index er man sob somei elements thke 1 kom hoi .ajonno jokhon reverse korte hobe tokhon .length thake 1 negative korte hobe .nah hola first elements undefind asbe 

   for(let i= str.length-1; i >=0; i--){
    let indexElement = words[i];
    result.push(indexElement);

   }
   let  reversed = result.join(' ');
   return reversed;

}
let revResult = reverseWords(myString);
console.log(revResult);


