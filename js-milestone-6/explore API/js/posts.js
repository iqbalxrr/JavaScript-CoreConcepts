
function addPosts(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(data => displayPost(data))
}

  function displayPost(posts){

    const divContainer = document.getElementById('div-container');

    //   divContainer.classList.add('post');

    for( const post of posts){

        const postDiv = document.createElement('div');

         postDiv.classList.add('post')
        postDiv.innerHTML = `
          
          <h4> user: ${post.userId} </h4>
          <h5> title:${post.title} </h5>
          <p> description : ${post.body} </p>
         
        `;

        divContainer.appendChild(postDiv)
    }
  }

  addPosts() 