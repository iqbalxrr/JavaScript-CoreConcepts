var products = [
    {name:'shirt',price: 800},
    {name:'pant',price: 1200},
    {name:'shoo',price: 3200},
    {name:'belt',price: 300},
]

function costProducts(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        //   console.log(product);
         sum = sum + product.price;
    }
    return sum;

}
 let totalCost = costProducts(products);

 console.log(totalCost);