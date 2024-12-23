//  what is the JSON = JavaScript Object Notation

/*
JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *
*/

// JSON  javascrip er sokol( number and buliyan bad diya ) value ke JSON string a rupantor kore .

const student = { name: 'iqbal' , id: 125455 , country:'bangladesh'};
console.log(student);

//{ name: 'iqbal', id: 125455, country: 'bangladesh' }

const stringfied = JSON.stringify(student);

console.log(stringfied);

//{"name":"iqbal","id":125455,"country":"bangladesh"}


// convert main obj 

const mainObj = JSON.parse(stringfied);

console.log(mainObj);

// { name: 'iqbal', id: 125455, country: 'bangladesh' }