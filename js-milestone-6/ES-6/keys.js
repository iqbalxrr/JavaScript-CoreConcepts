const person = {
    name : 'iqbal',
    age : 21,
    nid : 21165468,
}

const keys = Object.keys(person);

// [ 'name', 'age', 'nid' ]
//console.log(keys);

const values = Object.values(person);

//[ 'iqbal', 21, 21165468 ]
//console.log(values);


//  pair aker a pawa jabe 
//  arry of arry or two daimentional Arry  

const entries = Object.entries(person);

// [ [ 'name', 'iqbal' ], [ 'age', 21 ], [ 'nid', 21165468 ] ]

//console.log(entries);

//  remove or freeze any propertis 

delete person.name;

// { age: 21, nid: 21165468 }

console.log(person)

Object.freeze(person);

//  add properties 
//  object ke jodi freeze kora thake tahoal kono properties add hobe nah 
person.country = 'banglsdesh'
person.village = 'kultoly'

console.log(person);

