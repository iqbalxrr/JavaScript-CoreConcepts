
// type coercion 
// type conversion 

/**
 * The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.
 */

//  1. always use ===
//  2 .equal comparison does not work non-primitive ( [] ,{});

/* == vs ===
1. == variable r type ka chake korte pare nah ( 22 and '22' akoi mone kore);

2 . === abr type chake korte pare 

*/
const first = 22;
const second = '22';

if(first == second){

    console.log('result is true');
}
else{

    console.log('result is false');
}