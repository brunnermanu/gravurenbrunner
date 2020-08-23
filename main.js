//Get modal element
var modal = document.getElementById('simpleModal');


//get open modal button
var modalButton = document.getElementById('modalButton');


//get close button
var closeButton = document.getElementsByClassName('closeButton')[0];


//function to close Modal
function closeModal(){
    modal.style.display = 'none';
    console.log('fired')
}

//listen for close click
closeButton.addEventListener('click', closeModal);

setTimeout(function(){ 
    modal.style.display = 'block';    
}, 1000);
