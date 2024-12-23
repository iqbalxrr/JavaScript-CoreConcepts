
const phones = [

    {name: 'iphone' , price: 23444 , color : 'golden'},
    {name: 'sumsang' , price: 23000, color : 'golden'},
    {name: 'xiome' , price: 23444 , color : 'golden'},
    {name: 'redmi' , price: 23444 , color : 'golden'},
    {name: 'realmi' , price: 23444 , color : 'golden'},
    {name: 'rtc' , price: 23444 , color : 'golden'}
];

// copy array 

const studentArryCopy = {...phones}

// add a object inside array like odject

const newobj = {name: 'itle' , price: 2300 , color : 'green'}

const newPhones = {...phones, newobj};

// console.log(newPhones);

// remove any object from arry like obj 

const removeRedmiPhone = phones.filter( phone  => phone.name !== 'redmi');

console.log(removeRedmiPhone);
