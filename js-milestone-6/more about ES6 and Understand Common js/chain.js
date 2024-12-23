// Date access 

const data = [{name: 'iqbal' , id : 14575 , address: 'munshijonj'}];

// console.log(data[0].address);

const products = {

    sell: 5000,
    data : [
        {name: 'apple-mackbook' , price: 150000, color: 'white'},
        {name: 'lenavo' , price: 65000, color: 'black'}
    ]
}

//  need lenavo price

// console.log(products.data[1].price);

const user = {
    id: 14485,
    name: 'iqbal',
    address: {
        street:  {
            city:'dhaka',
            rode:'uttora 12 no sector'
        },
    },
}

// need rode properties 

console.log(user.address.street.rode);
