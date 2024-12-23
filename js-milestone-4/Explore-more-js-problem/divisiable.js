// show output : 1-50
// if the number is divisiable by 3 then insert this place "foo"
// if the number is divisiable by 5 then insert this place "bar"
// if the number is divisiable by 3 and by 5  then insert this place "foobar"


for( let i = 1; i <= 50; i++){
    if(i % 3 ===0 && i % 5 ===0 ){
        console.log('foobar');

    }
    else if(i % 3 ===0){
        console.log('foo');
    }
    else if(i % 5 ===0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
    }
