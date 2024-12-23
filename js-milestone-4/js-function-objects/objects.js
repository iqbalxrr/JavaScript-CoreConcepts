// objects holo onk gula boisester somisti 

// var studentInfo = {
//     id:1233434,
//     roll:3345,
//     result:"a+",
//     blodeG:"ab+",
// }

// var myComputer ={
//     processer :"intel",
//     drive: "ssd",
//     price:26000,
//     processerbit: "64bit",
// }

// myComputer.processer = "AMD"; // set valu

// // get valu 
// console.log(myComputer);
// console.log(myComputer.price);



var soppingCard ={
    pen:3,
    books:4,
    penchil:5,
    khata:12,
    sunglass:3,
    keybord:1,
    mouse:2,
}
console.log(soppingCard);

// when you know specific property name. we use . notasion  to get the value .

var penCount = soppingCard.pen;

// alternative system1

var penCount2 = soppingCard['pen'];

// alternative 2

var propertyName = "pen";

var propereValu = soppingCard[propertyName];

console.log(propereValu);





// get objects and values

var properties = Object.keys(soppingCard);

var propereValus = Object.values(soppingCard);

console.log(properties);

console.log(propereValus);


// set property valus 

// 1
soppingCard.books = 15;

// 2
soppingCard["books"]=15;

// 3
var propertyName = "pen";

soppingCard[propertyName] = 15;

console.log(soppingCard);




