


// primitive type pass by value 
let num1 = 4 ;
let num2 = 5 ;

function multiply( a, b){
    
    a = 6;
    const result = a*b;
    return result ;
    
}
  console.log(num1);

//  num1 er kono man change hoini karon function er vitor kono man change korle primitive number reference dhore rakhe nah ,


multiply( num1 , num2);

 console.log(num1);



//  non primitive array and objects 

// objects and arry pass by referance 

const student1 = { name: 'iqbal' , partner:'suji'};

const student2 = {name :" honk ", partner: 'jery'};


function makeMovie(couple1 , couple2){

   couple1.name = 'tasnim';
   couple1.partner = 'tiya';

}

console.log(student1, student2);
// { name: 'iqbal', partner: 'suji' } { name: ' honk ', partner: 'jery' } 

makeMovie(student1 , student2);

console.log(student1, student2);
// { name: 'tasnim', partner: 'tiya' } { name: ' honk ', partner: 'jery' }

//