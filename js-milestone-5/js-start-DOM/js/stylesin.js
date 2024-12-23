const sections = document.querySelectorAll('section');

for( const section of sections){
    console.log(section);
    section.style.border = '2px solid tomato'
    section.style.marginTop = '10px'
    section.style.padding = '10px'
    section.style.borderRadius = '5px'
}

const addStyles = document.getElementById('places-container');

addStyles.classList.add('bg-color');


//  add elenents js code

const pLaceUl = document.querySelector('#places-container ul')


//  create elemts 

// document.createElement('p')
// document.createElement('li')
// document.createElement('ul')
// document.createElement('span')

// const li = document.createElement('li');

// li.innerText = ' you are fole';
 
//  const addLi = placeUl.appendChild(li);

//  console.log(addLi);

