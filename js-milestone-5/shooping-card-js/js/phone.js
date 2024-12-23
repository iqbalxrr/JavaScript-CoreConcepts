
function phoneupdate(isIncress){

    const phoneNumber = document.getElementById('phone-number');

    const phoneNumberString = phoneNumber.value;

    const previousPhoneNumber = parseInt(phoneNumberString);
     
    let newphoneNumber ;
    if(isIncress === true){

        newphoneNumber = previousPhoneNumber +1;
    }
    else{
        newphoneNumber = previousPhoneNumber -1;

    }
    phoneNumber.value = newphoneNumber;

    return newphoneNumber;

}

function phoneUpdatePrice(){
    
    const phonePrice = document.getElementById('phonePrice');

    const updatePhonePrice = newPhoneUpdate * 1219;

    phonePrice.innerText = updatePhonePrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){

  newPhoneUpdate =  phoneupdate(true);

  phoneUpdatePrice();

  calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){

    newPhoneUpdate = phoneupdate(false);

    phoneUpdatePrice();

    calculateSubTotal();

})