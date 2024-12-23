
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())  // .json is not similar but close to json.parse 
//       .then(json => console.log(json))
      
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  

  // fetch holo akta promise dai
  fetch(url) 

  .then(response => response.json()) 
  // .json  response perametar ke  json a convert kore amon  akta promise dai .

  .then(json => console.log(json));


//   optational 

  function loedData(){
      fetch(url) 

      .then(response => response.json()) 
      // .json  response perametar ke  json a convert kore amon  akta promise dai
    
      .then(json => console.log(json));

  }