
function getInputValueById(elementId){
 
    const inputElement = document.getElementById(elementId);
    
    const elementString = inputElement.value;

    const element = parseFloat(elementString);

    return element; 

}

document.getElementById('calculate-all-cost').addEventListener('click', function(){

   const Manager = getInputValueById('manager');

   const Coach = getInputValueById('coach');

   const playerCost = document.getElementById('player-expenses');

   const playerstring = playerCost.innerText;

   const player = parseFloat(playerstring);


   const Total  = document.getElementById('total ');

   // calculate total
   
   const allCost = player + Manager + Coach ;

   Total.innerText = allCost ;


})