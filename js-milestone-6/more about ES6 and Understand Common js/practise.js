                    // task - 1 

  const evenNumber = [1, 3, 5, 7, 9];
  
  const convertOdd = (num) => num +1 ;

  const result = evenNumber.map(convertOdd);

//   console.log(result)


                        // task 2 
 
                        
   const numbers = [33, 50, 79, 78, 90, 101, 30];

   
//    console.log(numbers.filter((n) => n % 10 === 0 ))



                         //task 3
                           

// jara senior tader nam dekhate hobe 

  const instructor = [
     
    { name: 'nodi' , age: 28, position:'senior' },
    { name: 'akil' , age: 26, position:'junior' },
    { name: 'shobuj' , age: 30, position:'senior' }

  ]  

  const position = (n) => n.position === 'senior';

  const newArry = instructor.filter(position);

  const result1 = n => n.name;

//  console.log(newArry.map(result1));
  

                        // task - 4 
  

const people = [

    {name: 'mena' , age: 20},
    {name: 'rina' , age: 15},
    {name: 'tiya' , age: 22}
]

const age = (n)  => n.age;

const newArry2 = people.map(age);

const resultAge = newArry2.reduce( (previous , current) => previous + current , 0);

console.log(resultAge);


