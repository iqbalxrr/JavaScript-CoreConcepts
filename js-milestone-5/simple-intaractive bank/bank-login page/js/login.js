document.getElementById('btn-submit').addEventListener('click', function(){

   // Importent ::  input fild thake .value diya sob somei input er man nite hobe 

  const userEmail = document.getElementById('user-email');
  
  const email = userEmail.value; 

  const userPassword = document.getElementById('user-password');

  const password = userPassword.value;

  

  //Denger :: Do not this process to cheak verify email and password 

  if( email === 'sontan@gmail.com' && password === 'secret'){

    window.location.href = 'bank.html';
  }
  else{
    alert('you are a invalid user');
  }
})