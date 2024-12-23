
//  callback function r mane holo akta function vitr thake ar akta function ke call kore 


function callBack(newFunction , name ){
            
      newFunction(name);
}

function newFunction(name){

    console.log(' you are a new function name ' , name);
}

//  akn aami onk gulo function likte pari and akoi vabe call korte pari .  

callBack(newFunction , 'iqbal');