

document.getElementById('calculate-total').addEventListener('click', function(){
    
    const allLi = document.querySelectorAll('ol > li');

    const numberOfLi = allLi.length ;

    const perPlayerFiled = document.getElementById('per-player');

    const perPlayerFiledString = perPlayerFiled.value ;

    const perPlayer = parseFloat(perPlayerFiledString);

    if(isNaN(perPlayer)){
        alert('please input number')
        return ;
    }

    const playerExpenses  = document.getElementById('player-expenses');

    //  calculate 

    const playerCost = perPlayer * numberOfLi ;

    playerExpenses.innerText = playerCost ;


})