// const myForm=document.getElementById('my-form');
 
// myForm.addEventListener('submit',onSubmit);
// function onSubmit(e)
// {

//     e.preventDefault();
//     var nameInput=document.getElementById('name').value;
// var emailInput=document.getElementById('email').value;

// const details={
//    nameInput: nameInput,
//     emailInput: emailInput,
// }
// window.localStorage.setItem('Input',JSON.stringify(details));
   
// }
const myForm=document.getElementById('my-form');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
var nameInput=document.getElementById('name').value;
var emailInput=document.getElementById('email').value;
const myObj=
{
    name: nameInput,
    email: emailInput,
}
let myObj_Serialized=JSON.stringify(myObj);

localStorage.setItem('myObj',myObj_Serialized);
let myObj_deSerialized=JSON.parse(localStorage.getItem('myObj'));

console.log(myObj_deSerialized)
}

