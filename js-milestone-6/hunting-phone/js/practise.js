

// data lode 

const phoneHanting = async(searchInput) =>{

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchInput}`);

    const data = await res.json();

    const phones = data.data ;

    phoneContaine(phones);


}

 const  phoneContaine = (phones) =>{

    const phonContainer = document.getElementById('phon-container');

    phonContainer.textContent = '';
   

    // display show all btn 

    const showAllBtn = document.getElementById('show-all-btn');

    if( phones.length > 12 ){

        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }


     // display show only 12 

     phones = phones.slice( 0 , 16)


   //   card section 
    phones.forEach(phone => {
        
        console.log(phone);

    const phoneCard = document.createElement('div');

    phoneCard.classList = ('card bg-base-100 w-96 shadow-xl');

    phoneCard.innerHTML =  `
         
         <figure class="px-10 pt-10">
                  <img
                    src="${phone.image}"
                    alt="Shoes"
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title"> ${phone.phone_name} </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions">
                    <button onclick="my_modal_1.showModal()" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
    
    `;
       
    phonContainer.appendChild(phoneCard);
   
    });

    loaddingtoggle(false);
   
 }





// hendal search 

const searchphone = () =>{

  const inputFiled = document.getElementById('input-fild');

  const searchInput = inputFiled.value;

  phoneHanting(searchInput);

   loaddingtoggle(true);

//    jokhon btn a click korbe tokhon toggle ta lode dekhabe ajonno true ;



}


// toggle loading section 

const loaddingtoggle = (isloading)  =>{

    const toggleLode = document.getElementById('toggle-loader');

    if(isloading){

        toggleLode.classList.remove('hidden');
    }
    else{
        toggleLode.classList.add('hidden');
    }

}

// modal section 

const loadDetails = async()  =>{

    const res = await fetch (`https://openapi.programming-hero.com/api/phone/${slug}`);

    const data = await res.json();

    const phone = data.data;

    modalCard(phone);

}

const modalCard = (phone)  =>{

    const showDetails = document.getElementById('my_modal_1');

    console.log(showDetails)
}




