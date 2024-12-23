function generateNumber(){
    const number = Math.round(Math.random()*10000); 
    return number ;
}

function getpin(){

    const pin = generateNumber();

    const pinString = pin + '';
    // emtey string jog korlam jate sonkha ta string hoia jai . tarpor leanth diya cheak kora jabe 
    
    if(pinString.length === 4){

        return pin;
    }
    else{

        return getpin();
    }
    
}

 document.getElementById('btn-generate').addEventListener('click', function(){

   const pin =  getpin();
   const displayFild = document.getElementById('display');

   displayFild.value = pin ;
    
    
})

document.getElementById('calculator').addEventListener('click', function(even){
    const number =  even.target.innerText;

    const typedNumber = document.getElementById('typed-number');
     
    const previousTypedNumber = typedNumber.value;

    if( number === 'C'){
        typedNumber.value = '';

    }
    else if(number === '<'){
        const digits = previousTypedNumber.split('');
        // ager ja input number silo take akta akta kore katlam
        digits.pop()
        // tarpor pop() diya last digit ke ber kore dilam 
        const newDigits = digits.join('');
        // tarpor abr join('') korlam obosisto digit gulo ke 
        typedNumber.value = newDigits;

    }
    else{
        const newTypedNumber = previousTypedNumber + number;

        typedNumber.value = newTypedNumber;
    }
   

    
})