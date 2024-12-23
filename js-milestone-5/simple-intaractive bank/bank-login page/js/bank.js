//step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2
    // get the deposit field

    const depositFiled = document.getElementById('deposit-field');
// input ba innertext thake nawa input sob somei string hobe 
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    

    //step-3
    // current deposit amount 

    const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositAmountString = depositTotalElement.innerText;
     const previousDepositAmount = parseFloat(previousDepositAmountString);
     //step - 4 
     //calculate deposit

     const currentDepositAmount = previousDepositAmount + newDepositAmount;

     depositTotalElement.innerText = currentDepositAmount;
     
  // step -5 balance section 
  const balanceTotalElement = document.getElementById('balance-total');
   const previousBalancetotalString = balanceTotalElement.innerText;

   const previousBalance = parseFloat(previousBalancetotalString);

  // calculate balance
   const currentBalanceTotal = previousBalance + newDepositAmount ;

   balanceTotalElement.innerText = currentBalanceTotal;
   
   

    
    //step -7
    // clear the deposit filed
    
    depositFiled.value = '';
})

//<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>//

// step - withdraw section 

document.getElementById('btn-withdraw').addEventListener('click', function(){
   // step 1 

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const newwithdraw = parseFloat(withdrawFieldValueString);

    // clear value
   withdrawField.value = '';
   
   //***
    if(isNaN(newwithdraw)){
        alert('please inter a number ')
        return;
    }

   // step-2
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const withdrawTotalElementString = withdrawTotalElement.innerText;

   const previouswithdraw = parseFloat(withdrawTotalElementString);

   

  
  // step - 3 
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalancetotalString = balanceTotalElement.innerText;
  const previousBalance = parseFloat(previousBalancetotalString);

  if(newwithdraw > previousBalance){

    alert('please withdraw ammount')
    return;
  }

 // claculate-1 

 const currentWithdraw = previouswithdraw + newwithdraw ;

 withdrawTotalElement.innerText = currentWithdraw;

  // calculete-2

  const newBalance = previousBalance - newwithdraw ;

  balanceTotalElement.innerText = newBalance;


//step -last 
// clear value
withdrawField.value = '';

})