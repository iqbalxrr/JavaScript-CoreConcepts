document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawFild = document.getElementById('withdraw-field');

    const withdrawFildString = withdrawFild.value ;

    const newWithdraw = parseFloat(withdrawFildString);

    // clear 

    withdrawFild.value = '';

    //

    if(isNaN(newWithdraw)){

        alert('this is a wrong number');
        return;
    }

    //

    const withdrawTotal = document.getElementById('withdraw-total');

    const withdrawTotalString = withdrawTotal.innerText;

    const previousWithdraw = parseFloat(withdrawTotalString);


    // calculate 

    const currentWithdraw = newWithdraw + previousWithdraw ;

    withdrawTotal.innerText = currentWithdraw;


    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalString = balanceTotal.innerText;

    const previousBalance = parseFloat(balanceTotalString);

    // calculate 

    const currentBalance = previousBalance - newWithdraw ;

    balanceTotal.innerText = currentBalance ;

    
})