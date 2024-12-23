// for(i=1; i<20; i++){
//     console.log(i);

//     if(i >10){
//         break;
//     }
// }

// var rostGiven = 0;
// while(rostGiven <10){
//     console.log(rostGiven);
//     rostGiven++;

//     if(rostGiven > 5){
//         break;
//     }
// }

var numbers =[24, 23, 25, 45, 54, 46];
 var collect = [];
for(var i=0; i <=numbers.length; i++){
    var number = numbers[i];
    if(number < 50){
        
        collect.push(number);   
        // continue r break akoi jinis .
    }
    console.log(collect);
}