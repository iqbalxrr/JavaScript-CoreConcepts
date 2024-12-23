

const lodeComments = () =>{

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then ( res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
}


//  async await function 

const lodeComments2 = async() =>{

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()

    console.log(data);
    }
    catch(error){

        console.log('data lode error')
    }

}