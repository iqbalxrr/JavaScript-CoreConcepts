function findAddress(obj){
       var result = '__';
       var element1 = obj.street;
       var element2 = obj.house;
       var element3 = obj.socity;
       if(element1=== 0){
        element1 = result;
        
       }
       for(let i= 0 ; i< obj.house.length; i++){
           console.log(i);
           if(i === -1 ){
              element2 = result;
           }
         
       }
       
       console.log(element1, element2, element3);
       
}

let obj = {
    street: 0,
    house:'',
    socity: '0'

}

findAddress(obj);