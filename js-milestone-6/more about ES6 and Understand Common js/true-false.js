
/**
  1: truthy
   a.[]
   b.{}
   c." "
   d.

  2.falsy 
   a. false
   b. 0 
   c. '' (emty string )
   d. undefined
   d.null
   e.

 */


const x = false ;

if(x){
    
    console.log('your result is truthy');

}
else{
    console.log('your result is false');
}

// cheka falsy 

const y = '';

if (!y){

    console.log('you are truthy')
}
else if(!!y){
    
    console.log('you are falsy')
}
