document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
     
    
    const depositFieldValueString = depositField.value ;
    const newDeposit = parseFloat(depositFieldValueString);

    // depositfild clear 

    depositField.value = '';

    if(isNaN(newDeposit)){
        alert('this is a wrong number');
        return;
    }
    
    
   const totalDeposit = document.getElementById('deposit-total');

   const previousDepositString = totalDeposit.innerText ;

   const previousDeposit = parseFloat(previousDepositString);


   //culculate 

   const currentDeposit = newDeposit + previousDeposit ;
   totalDeposit.innerText = currentDeposit ;

   
})

