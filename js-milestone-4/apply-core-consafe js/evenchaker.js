// even number chaker 

function isEven(takeInput){
    var remaiberNumber = takeInput %2;
     if(remaiberNumber === 0){
        // console.log("true");
        return true;
     }
     else{
        // console.log("false");
        return false;
     }
    // return remaiberNumber;
     
}
var takeInput = 39;
var result = isEven(takeInput);
console.log(result);


