// leap year chaker 
function isLeapYear(inputYear){
  var leapyear = inputYear % 4;

  if(leapyear ===0){
    // console.log("this year a leapyear year");
      return true;
  }

  // else{
  //   console.log("is not a leapyear year")

  // }
  return false;
}
var inputYear = 2002;
isLeapYear(inputYear);
