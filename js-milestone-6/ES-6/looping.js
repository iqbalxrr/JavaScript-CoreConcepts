
//  for of loop

const numbers = [ 12 , 32, 34, 34]

for ( const number of numbers){

    console.log(number);

}

const nobab = 'noban siraj udhula';

for ( const charecter of nobab){

    console.log(charecter);
}

//  for in loop 

const obj = {
    name : 'iqbal',
    age : 22,
    country : 'bangladesh'
}

for ( const key in obj){
    
    const value = obj[key]
    console.log(key , value);
}

