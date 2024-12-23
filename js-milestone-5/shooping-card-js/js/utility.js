// 
function getTextElementById(elementId){

    const element = document.getElementById(elementId);
    const elementString = element.innerText;

    const currentElement = parseInt(elementString);
    
    return currentElement;
    
}
 function setTextElementById(elementId , value){
    const currentSubTotal = document.getElementById(elementId);
    currentSubTotal.innerText = value;
 }

//
function calculateSubTotal(){

    const currentPhoneTotl = getTextElementById('phonePrice');
    const currentCaseTotal = getTextElementById('case-price');
    const currentCostTotal = currentPhoneTotl + currentCaseTotal ;
    setTextElementById('Sub-total', currentCostTotal);
    
    // tax calculate 

    const taxAmountString = (currentCostTotal * 0.001).toFixed(2) ;
    taxAmount = parseFloat(taxAmountString);
    
    setTextElementById('tax-total', taxAmount);

    // final calculate 

    const finalAmount = currentCostTotal + taxAmount;

    setTextElementById('final-total', finalAmount);







    


}

calculateSubTotal();

const currentSubTotal =getTextElementById('Sub-total');

const taxTotal = getTextElementById('tax-total');

const finalTotal = getTextElementById('final-total');


const totalAll = taxTotal + finalTotal + currentSubTotal ;

finalTotal.innerText = totalAll;





