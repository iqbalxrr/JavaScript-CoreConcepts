
function sortMaker(ary){
   var num1 = ary[0];
   var num2 = ary[1];
   var newAry =[];
   if(num1 !== num2 && num1 >= 0 && num2 >= 0 ){
      if(num1 > num2){
         [ num1 , num2] = [ num1, num2]
        newAry.push(num1, num2);
         console.log(newAry);
      }
      else{
         [ num1 , num2] = [ num2, num1]
         newAry.push(num1, num2);
          console.log(newAry);
       }
   }
   else if( num1 === num2){
      console.log('equal')
   }
    else{
      console.log('Invalid input')
    }
}
var ary =[ 2, 4];
var cheakResult = sortMaker(ary);


