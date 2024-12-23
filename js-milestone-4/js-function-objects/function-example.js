function getAvarage(assainment1, assainment2, assainment3){
    const totalMark = assainment1 + assainment2 + assainment3;
    const avarage = totalMark / 3;
    return avarage;
}
const assainment1Mark = 60;
const assainment2Mark = 80;
const assainment3Mark = 90;
const myAvarage = getAvarage(assainment1Mark, assainment2Mark, assainment3Mark);

console.log(myAvarage.toFixed(3));

// task-2

function add(num1, num2){
    const sum =num1 + num2;
    return sum;

}
const result1 = add(25, 7);
const result2 = add( 34, 25);
const totalResult = add( result1, result2);

console.log(totalResult);
