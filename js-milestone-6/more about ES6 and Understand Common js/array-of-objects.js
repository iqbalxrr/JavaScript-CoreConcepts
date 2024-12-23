

const products =[
    {id:1 , name: 'lenavo' , price: 45000},
    {id:2 , name: 'apple' , price: 145000},
    {id:3 , name: 'dell' , price: 40000},
    {id:4 , name: 'hp' , price: 35000},
]

//  map 

const names = products.map( (n) => n.name); 
// akhan a n holo array er poti ta upadan

// console.log(names)

const prices = products.map(p => p.price);

// console.log(prices);


// forEach 

products.forEach( n => console.log(n.id));


// filter 

const expensive = products.filter( (n) => n.price > 50000);

// console.log(expensive);


// find 

const cheaprate = products.find((n) => n.price  < 50000);

console.log(cheaprate);


// reduce 

// previous value ta holo inicial ja value ta dhorbo seta 
// r current value ta holo array er man ta 

const allPrices = products.reduce((acum , current) => acum + current.price , 0)

console.log(allPrices);