
function canpay(num1, num2) {
    
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
        let element = num1[i];
        // console.log(element);
        sum = sum + element;   
    }
    if(num1.length === 0){
        console.log('the array is empty')
        return false;
    }
    else if(sum >= num2) {
        return true;
    }
    else {
        return false;
    }
    
}

let result = canpay([], 10);

console.log(result);
