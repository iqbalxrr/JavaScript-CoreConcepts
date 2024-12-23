
 
  function getElementValueById(nameId , oderListId , disabledBtnId ){

    const nameElement = document.getElementById(nameId);
    const name = nameElement.innerText;
     
    const oderdList = document.getElementById(oderListId);
    
    const li = document.createElement('li'); 
    li.innerText = name;
    oderdList.appendChild(li);

    const btnDisabled = document.getElementById(disabledBtnId);
    
    btnDisabled.disabled = true ;
    btnDisabled.style.backgroundColor = 'gray';

  
  }



// select--1 

document.getElementById('mbappe-select').addEventListener('click', function(){

     
    getElementValueById('mbappe' , 'oderd-list', 'mbappe-select');


    
})
// select--2
document.getElementById('neymar-select').addEventListener('click', function(){

    getElementValueById('neymar' , 'oderd-list', 'neymar-select');

})
// select--3 
document.getElementById('messi-select').addEventListener('click', function(){

    getElementValueById('messi' , 'oderd-list', 'messi-select');
    
})
// select--4 
document.getElementById('renato-select').addEventListener('click', function(){

    getElementValueById('renato' , 'oderd-list', 'renato-select');

})
// select--5 
document.getElementById('machado-select').addEventListener('click', function(){

    getElementValueById('machado' , 'oderd-list', 'machado-select');
})
// select--6 
document.getElementById('ramos-select').addEventListener('click', function(){

    getElementValueById('ramos' , 'oderd-list', 'ramos-select');
})
