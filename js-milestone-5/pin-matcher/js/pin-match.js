function genaratePin(){
    const random = Math.round(Math.random()*10000);
    return random ;
}

function getpin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if( pinString.length === 4){
       
        return pin ;

    }
    else{
        return getpin();
    }
}

document.getElementById('btn-generate').addEventListener('click', function(){
    const pin = getpin();

   const displayElement = document.getElementById('display');

   displayElement.value = pin ; 
})

document.getElementById('calculator').addEventListener('click', function(even){
    const number = even.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    const previousTypedNumber = typedNumber.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumber.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remeningDigits = digits.join('');

            typedNumber.value = remeningDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumber.value = newTypedNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function(){

    const display = document.getElementById('display');
    const displayPin = display.value;

    const typedNumberFiled = document.getElementById('typed-number');

    const typedNumber = typedNumberFiled.value;
    
    const pinSucess = document.getElementById('pin-sucess');
    const pinFail = document.getElementById('pin-fail');

    if( displayPin === typedNumber){
        pinSucess.style.display = 'block';
        pinFail.style.display = 'none';
    }
    else{
        pinFail.style.display = 'block';
        pinSucess.style.display = 'none'; 
    }


})