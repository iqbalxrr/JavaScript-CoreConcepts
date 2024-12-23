
function caseUpdate(isIncress){
     const caseNumber = document.getElementById('case-number');
 
     const caseNumberString = caseNumber.value ;
 
     const previousCasenumber = parseInt(caseNumberString);
 
    let newCaseNumber;
 
    if(isIncress === true){
 
     newCaseNumber = previousCasenumber +1;
     
    }
    else{
     newCaseNumber = previousCasenumber -1 ;
 
    }
 
    caseNumber.value = newCaseNumber ;
 
     return newCaseNumber;
 }
 


 function updateCaseTotalPrice(){
 
     const caseprice = document.getElementById('case-price');
     const totalCasePrice = newCaseUpdate * 59;
     caseprice.innerText = totalCasePrice ;
 }
 




document.getElementById('btn-case-plus').addEventListener('click', function(){

     newCaseUpdate = caseUpdate(true);

     updateCaseTotalPrice();

     calculateSubTotal();
      
})

document.getElementById('btn-case-negative').addEventListener('click', function(){
   
     newCaseUpdate = caseUpdate(false);

     updateCaseTotalPrice();

     calculateSubTotal();
    

   
})