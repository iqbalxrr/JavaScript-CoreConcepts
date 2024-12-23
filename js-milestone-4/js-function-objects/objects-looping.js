var soppingCard ={
    pen:3,
    books:4,
    penchil:5,
    sunglass:3,
    keybord:1,
    mouse:2,
}

const keys = Object.keys(soppingCard);
console.log(keys);
const value =Object.values(soppingCard);
console.log(value);

// [ 'pen', 'books', 'penchil', 'sunglass', 'keybord', 'mouse' ]

for(i =0; i< keys.length; i++ ){
    
    // console.log(keys[i]);
    // console.log(value[i]);

    var propertyName = keys[i];
   
    var propertyValue = soppingCard[propertyName];
    console.log(propertyName, propertyValue); 
  

}

// for in loop

for(var propertyName in soppingCard){
    var values = soppingCard[propertyName];
    console.log(propertyName, values);

}