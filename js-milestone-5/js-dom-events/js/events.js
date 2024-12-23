//  option - 3

function clickMaker(){
    document.body.style.backgroundColor = 'blue';
}

// option - 4

const idClickMaker = document.getElementById('idClick-maker')

 idClickMaker.onclick = clickMaker2; // function ke call kora jabe nah akn a tahola automatic style peya jabe .clicker dara kono kaz hobe nah 
        
 function clickMaker2(){
 document.body.style.backgroundColor = 'green'
      
}     

// option - 5

const makePink = document.getElementById('make-pink')

makePink.addEventListener('click', makePinkClicker);

function makePinkClicker(){
    document.body.style.backgroundColor = ' pink'
}

// option - 5 alternative 

const makeYellow = document.getElementById('make-yellow')

makeYellow.addEventListener('click', function makeYellowClicker(){
    document.body.style.backgroundColor = 'yellow';
})

//  always use this option 

document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})