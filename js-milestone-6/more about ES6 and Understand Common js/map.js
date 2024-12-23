

// notice:?  condition er opor map chole nahh 

console.log(players.map( n => n % 2 === 1 ));

//[ true, false, false, true, false ]



// output: dubble each array elements 

//  map >> kora mane sa arry er opor a loop chalabe tarpor function  ke call kore result ke akta new array vitor dhukiya return korbe ;

const numbers = [12, 33, 34, 45, 55 , 66];

const dubled = [];

for( const num of numbers){

    const duble = num * 2;
    dubled.push(duble);
}

// console.log(dubled);


// use map to solve this 

const dubble = (num) => num*2 ;

const addFive = num => num + 5 ;

const deviteBy2 = num => num / 2 ;

//console.log(numbers.map(addFive));

//console.log(numbers.map(deviteBy2));

//console.log(numbers.map(dubble));

// short cut 

//console.log(numbers.map(num => num*2));


// task >>  need friend length 

const friends = ['iqbal' , 'mahafuj' , 'tanvir' , 'torikul'];

console.log(friends.map( friend => friend.length));

//  task >> need first charecter of friends 

const firstCharecter = friend => friend[0];

console.log(friends.map(firstCharecter));