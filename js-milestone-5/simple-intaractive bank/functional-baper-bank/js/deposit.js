function getInputElementById(inputFildId){
    const inputFild = document.getElementById(inputFildId);
    const inputFildString = inputFild.value; 
    const inputFildValue = parseFloat(inputFildString);
    inputFild.value = '';

    return inputFildValue ;
}


function getTextElementById(elementId){
   const elementFildId = document.getElementById(elementId);
   const elementFildString = elementFildId.innerText;
   const elementFildValue = parseFloat(elementFildString);

   return elementFildValue ;

}

function setTextElementById(elementId , newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue ;
}
