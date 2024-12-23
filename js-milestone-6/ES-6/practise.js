                 //  task no - 1

// A.1
const numbers = (num1 , num2 , num3) => {

    const multiapply = num1 * num2 * num3 ;

    return multiapply ;

}

const result = numbers( 100, 120 , 520);

// console.log(result);

// A.2

const threeline = ` i am a web developer . i love to code . i love to eat briyani `;

// console.log(threeline);

//  A.3

const sumNumber = (num1 , num2 = 100) => {
    const sum = num1 + num2 ;
    return sum;

}

const result1 = sumNumber( 100 );

// console.log(result1);


                    //  task no - 2 

const getEvenLengthNames = (friends) =>{

    const newArry = [];

    for( let name of friends){

        if( name.length % 2 === 0 ){
            
            newArry.push(name);
        }
    }
    return newArry;
};


const friends = [ 'mahafuj' , 'tanvir' , 'iqbal' , 'torikul'];

const resultEvenLength = getEvenLengthNames(friends);

// console.log(resultEvenLength);



                    // task no -3 

