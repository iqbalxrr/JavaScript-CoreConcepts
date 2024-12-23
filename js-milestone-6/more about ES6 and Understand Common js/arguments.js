
// arguments holo arrya like object

//  arguments only function er vitor pawa jabe .

// arguments holo akta array like objects .

function sum( a, b , c){

    console.log(arguments);
    //[Arguments] { '0': 23, '1': 34, '2': 45, '3': 67, '4': 65, '5': 33 }
    const result = a+b+c;
    return result ;
}

const total = sum( 23, 34, 45, 67, 65, 33);

console.log(total);

console.log(sum.length)
// output : 3 ( 3 ta perameter )

//  .length dila ja koita perameter dawa hoisa sa koita pawa jai 