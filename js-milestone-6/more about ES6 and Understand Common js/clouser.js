
// akta function er vitor a jodi function thake tahola oi function parent function er man acess korte pare 

function stopwatch(){

    let counter = 0;
    return function(){

        counter ++;
        return counter;
    }
}

const 