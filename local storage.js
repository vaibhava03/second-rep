const myForm=document.getElementById('my-form');
 
myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{

    e.preventDefault();
    var nameInput=document.getElementById('name').value;
var emailInput=document.getElementById('email').value;

const details={
   nameInput: nameInput,
    emailInput: emailInput,
}
window.localStorage.setItem('Input',JSON.stringify(details));
   
}
