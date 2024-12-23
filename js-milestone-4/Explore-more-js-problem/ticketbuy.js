// 1- 100 ticket >>> 100 tk
// 1 - 200 ticket >>> 1 to 100 >>100tk ,100 to 200 >> 90 tk 
// 1 - 300 ticket >> 1 to 100 >>100tk ,100 to 200 >> 90 tk ,200 to 300 >>> 70 tk

function ticketPrice(ticketNumber){
    
    const first100rate = 100;
    const second100rate = 90;
    const third100rate = 70 ;

    if(ticketNumber <= 100){
        const price = ticketNumber * first100rate;
        return price;
    }
    else if (ticketNumber <= 200){
        const first100Price = 100 * first100rate;
        const restTicketQuantity = ticketNumber - 100;
        const restTicketPrice = restTicketQuantity * second100rate;
        const totalPrice = restTicketPrice + first100Price;
        return totalPrice ;

    }
    else{
         const first100Price = 100 * first100rate;
         const second100Price = 100 * second100rate;
         const restTicketQuantity = ticketNumber - 200;
         const restTicketPrice = restTicketQuantity * third100rate;
         const totalPrice = first100Price + second100Price + restTicketPrice;
         return totalPrice;


    }
}
        const money = ticketPrice(300);
        console.log(money);