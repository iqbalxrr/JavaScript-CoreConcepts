//  task -1
// function foo(){
    
//     console.log("you are a foo");

//     bar();
// }

// function bar (){
//     console.log("you are a bar "); 
//  }

// foo();
// bar();


// // task-2

// function make_avrg (a, b, c){
//     var sum = a+b+c;
//     var avrge = sum / 3;
//     return avrge ;

// }
// var result = make_avrg( 10,20,40);

// console.log(result.toFixed(3));

// task -3
   const arr = [10, 20, 30, 40, 50];

    function calAvg(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
    const average = calAvg(arr);
   console.log(average);
   
// task-4

  var number =[12, 23, 33, 23, 55, 67];

  function make_avrg(number){
    let sum =0;

   for(var i= 0; i < number.length; i++){

    sum += number[i];
   }
   return sum / number.length;

  }
 var avarage = make_avrg(number);

 console.log(avarage);


