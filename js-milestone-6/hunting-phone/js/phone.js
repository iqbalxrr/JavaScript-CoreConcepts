
const huntingPhone = async (searchText) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

    const data = await res.json();

    const phones = data.data; 

    displayPhone(phones);

    // console.log(phones);
}

const displayPhone = (phones) =>{
  

      const phoneContainer = document.getElementById('phone-container');
      // clear previous 
      phoneContainer.textContent = '';

      // if phone are over 12 

      const showAllContainer = document.getElementById('show-all-container');

      if(phones.length > 12){

        showAllContainer.classList.remove('hidden');

      }
      else{
        showAllContainer.classList.add('hidden')
      }

      //  shoaw only 12 phone in display 

      phones = phones.slice(0 , 12);

     phones.forEach( phone =>{

      // add elements 
      const phoneCard = document.createElement('div');

      phoneCard.classList = 'card bg-gray-100 p-4 shadow-xl ';
      
      phoneCard.innerHTML = `   
         <figure class="px-10 pt-10">
                      <img
                        src="${phone.image}"
                        alt="Shoes"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions">
                        <button onclick="showDetails('${phone.slug}')" class="btn btn-primary"> Show Details</button>
                      </div>
                    </div>

      `;

      phoneContainer.appendChild(phoneCard);

    })

    toggleLoadingSpinner(false);

}


// show Details

const showDetails = async (slug) =>{
   
// console.log(slug);

// show single phone details 

const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)

const data = await res.json();

//  console.log(data);

const phone = data.data;

 showAllDetailsModal(phone);
      
}


//  show all details modal 

const showAllDetailsModal = (phone)  =>{

   const modalPhonename = document.getElementById('show-detail-phone-name');

   modalPhonename.innerText = phone.name ;

   const detailsContainer = document.getElementById('details-container');

   detailsContainer.innerHTML = `

      <img src="${phone.image}" alt="">
    <p> ${phone.mainFeatures?.storage || 'storage not available'} </p>
     
              
   `;

  console.log(phone);

  showDetails_modal_5.showModal();

}

