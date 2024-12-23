//  header style 
const headerStyle = document.getElementById('header-container')
 headerStyle.style.color = 'white'
 headerStyle.style.textAlign = 'center'
 headerStyle.style.background = 'black'
 headerStyle.style.fontSize = '17px'
console.log(headerStyle);

//  section 1 styles in js 

const sections = document.querySelectorAll('section')
 for( const section of sections){
    section.style.backgroundColor = 'lightgray';
 }

const sectionStyle = document.querySelector('#section-one h2');

sectionStyle.style.textAlign = 'center'
sectionStyle.style.color = 'white'
sectionStyle.style.background = 'black'
sectionStyle.style.fontSize = '16px'

console.log(sectionStyle);

// section 2 style in js 

const sectionStyle2 = document.querySelector('#section-two h1')

sectionStyle2.style.textAlign = 'center'
sectionStyle2.style.color = 'white'
sectionStyle2.style.background = 'black'
sectionStyle2.style.fontSize = '16px'

console.log(sectionStyle2);

//  add a section styles 

const mainSection = document.getElementById('main-container')
console.log(mainSection);

const addSection = document.createElement('section')

 addSection.innerHTML =`
 <h2> place list </h2>
 <ul>
 <li>dhaka</li>
 <li>khulna</li>
 <li>josser </li>
 <li>satkhira</li>
 <li>cox's bazer</li>
 </>
 `
//  add class 
addSection.classList.add('section-three')
 
//  section 3 styles

const sectionStyle3 = addSection.querySelector('.section-three h2')

sectionStyle3.style.textAlign = 'center'
sectionStyle3.style.color = 'white'
sectionStyle3.style.background = 'black'
sectionStyle3.style.fontSize = '16px'

console.log(sectionStyle3);


mainSection.appendChild(addSection);

console.log(addSection);