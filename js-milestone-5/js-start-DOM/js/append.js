// where to add
const productsList = document.getElementById('products-list');
//   what to be add
const li = document.createElement('li');

li.innerText = ' mobile phone ';

// add the children

productsList.appendChild(li);


//  add a section in js >>>>>>>>>>>>>>>>>>>>>>>

//  1. where to add 

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section')

const h1 = document.createElement('h1')

 h1.innerText = ' food products list';
 section.appendChild(h1);

 const ul = document.createElement('ul')

 const li1 = document.createElement('li')
 li1.innerText = ' beryani';
 ul.appendChild(li1);

 const li2 = document.createElement('li')
 li2.innerText = ' beryani';
 ul.appendChild(li2);

 const li3 = document.createElement('li')
 li3.innerText = ' beryani';
 ul.appendChild(li3);

 const li4 = document.createElement('li')
 li4.innerText = ' beryani';
 ul.appendChild(li4);

 const li5 = document.createElement('li')
 li5.innerText = ' beryani';
 ul.appendChild(li5);



section.appendChild(ul);
mainContainer.appendChild(section);


