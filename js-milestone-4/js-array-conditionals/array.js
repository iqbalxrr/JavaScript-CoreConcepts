// array means sari 

var frindsAge =[20, 24, 100, 45, 23, 29] ;

var picnicFee = [2000, 1500, 3000, 4000];

var naykaName = ['mahi', 'opu', 'jannat', 'subnur', 'sabana']

console.log(naykaName);

// .leanth means array er dorgho er vitor koita upadan asa 
console.log(picnicFee.length);

// get elements by index 

// index sob somei 0 diya suru hobe 

var number = [23, 34, 34, 54, 67, 12];

console.log(number);
console.log(number[2]);

// get element by index 

var element = number[4];
console.log(element);

// set elements by index 

number[2]=77;
number[4]=44;
console.log(number);


// find index from array 

var findIndex = number.indexOf(12);

console.log(findIndex);

// practise section 

var personAge = [12, 23, 35, 45, 55, 46, 57,];

console.log(personAge);
console.log(personAge.length) // array er vitor koita elements asa dekhabe 

console.log(personAge[3])

personAge[3] = 60 ;
personAge[5] = 90;

console.log(personAge);

var indexFind = personAge.indexOf(90);

console.log(indexFind);

// practise section 

var numbers = [ 12, 23, 323, 3443, 34, 34, 344 ]

var elementCheak = numbers[2];

console.log(elementCheak);

// add new elements into the array
numbers[2] = 77;
numbers[5] = 2222222;

console.log(numbers);

// index cheak in the array

var numbers = [ 12, 23, 323, 3443, 34, 34, 344 ]


var indexCheaking = numbers.indexOf(12);

console.log(indexCheaking);

var naykaName = ['mahi', 'opu', 'jannat', 'subnur', 'sabana']

var indexCheaking = naykaName.indexOf('mahi');
var indexCheaking = naykaName.indexOf('jannat','sabana');

console.log(indexCheaking);

/* The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive.













 


