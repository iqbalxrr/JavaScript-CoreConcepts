
const handalSearch = () =>{

    toggleLoadingSpinner(true);

    const searchFiled = document.getElementById('search-filed');

    const searchText = searchFiled.value;
    
    huntingPhone(searchText);



}

// toggle loading section 

const toggleLoadingSpinner = (isLoading) =>{


    const loadinSpinner = document.getElementById('loading-spinner');

    // loadinSpinner.classList.remove('hidden');

    if(isLoading){

        loadinSpinner.classList.remove('hidden');
    }
    else{
        loadinSpinner.classList.add('hidden');
    }

}