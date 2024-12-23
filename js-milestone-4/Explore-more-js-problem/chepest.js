const phones = [
{name:'oppo', price:20000, camera:102, color:'blue'  },
{name:'vivo', price:22000, camera:144, color:'black'  },
{name:'redmi', price:19000, camera:102, color:'blue'  },
{name:'sumsang', price:25000, camera:102, color:'blue'  },
{name:'realmi', price:23000, camera:102, color:'blue' }

]
function chepestPhone(phones){
    let chepest = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(phone.price < chepest.price ){
            chepest = phone
        }

    }
    return chepest;

}
    let myChoise = chepestPhone(phones);
    console.log(myChoise);