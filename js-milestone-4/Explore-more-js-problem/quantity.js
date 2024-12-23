var products = [
    {name:'shirt',price: 800, quantity:2 },
    {name:'pant',price: 1200, quantity:3},
    {name:'shoo',price: 3200, quantity:4},
    {name:'belt',price: 300, quantity:2 },
]

function costProducts(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        //   console.log(product);
        let productQuantity = product.price * product.quantity;
         sum = sum + productQuantity;
    }
    return sum;

}
 let totalCost = costProducts(products);

 console.log(totalCost);