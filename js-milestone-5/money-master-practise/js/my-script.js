
function getInputValueById(inputId){
   const inputElement = document.getElementById(inputId);
   const inputElementString = inputElement.value;
   const input = parseFloat(inputElementString)
   // inputElement.value = '';
   return input ;

}

function getElementValueById(elementId){

   const elementValue = document.getElementById(elementId);

   const elementString = elementValue.innerText;

   const element = parseFloat(elementString);

   return element;

}


document.getElementById('calculate-btn').addEventListener('click', function(){

    const incomeFiled = getInputValueById('income');
    const foodFiled = getInputValueById('food');
    const rentFiled = getInputValueById('rent');
    const clothesFiled = getInputValueById('clothes');
    

   const totalExpense = document.getElementById('total-expense');
   
   // calculate Expense
   const totalExpenseCalculate = foodFiled + rentFiled + clothesFiled ;

   totalExpense.innerText = totalExpenseCalculate;

   //  calculate balance 

   const balanceTotal = document.getElementById('balance');
   
   const balanceTotalCalculate = incomeFiled - totalExpenseCalculate ;

   balanceTotal.innerText = balanceTotalCalculate;
 
    
})

document.getElementById('btn-save').addEventListener('click', function(){

    // calculate persentage

   const incomeFiled = getInputValueById('income');
   const saveFiled = getInputValueById('save');
   const savingAmount = document.getElementById('saving-amount');
   const remainingBalance = document.getElementById('remaining-balance');

   
   const persentCalculate  = parseInt( incomeFiled * (saveFiled / 100));

   savingAmount.innerText = persentCalculate;

   // calculate Remaining Balance

   const remeiningCalculate = incomeFiled - persentCalculate ;

   remainingBalance.innerText = remeiningCalculate;



   






})