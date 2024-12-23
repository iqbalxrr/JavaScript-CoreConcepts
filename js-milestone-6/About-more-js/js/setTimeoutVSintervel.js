
// setTimeout(function , milisecond)


setTimeout(  () => {

    console.log(3)
} , 4000 )

  let sum = 0 ;
 const clockId = setInterval ( () =>{
  
    sum++;
        
    if( sum  > 6 ){

      clearInterval(clockId);
    }
    console.log(clockId , sum)


 } , 2000) 