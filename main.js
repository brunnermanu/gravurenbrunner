//Get modal element
let modal = document.getElementById('simpleModal');

//get open modal button
let modalButton = document.getElementById('modalButton');


//get close button
let closeButton = document.getElementsByClassName('closeButton')[0];

//function to close Modal
function closeModal() {
    modal.style.display = 'none';
    console.log('fired')
}

//listen for close click
closeButton.addEventListener('click', closeModal);


setTimeout(function(){ 
    modal.style.display = 'block';    
}, 1000);
