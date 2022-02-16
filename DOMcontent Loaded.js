const myForm = document.getElementById("Form");

Object.keys(localStorage).forEach((key) => {
  stringifiedDetailsOfPeople = localStorage.getItem(key);
  detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
  addElement(detailsOfPeople);
  });
  
  
myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{

    e.preventDefault();

  const emailId = document.getElementById("email").value;
  const name = document.getElementById("Name").value;
  
    const myObj = {
      name: name,
      emailId: emailId 
    }
    localStorage.setItem("userDetails"+emailId, JSON.stringify(myObj));
    
    addElement(myObj);
  }

function addElement(myObj)
 {
 var ul = document.getElementById("user-details");
 var li = document.createElement('li');
 li.appendChild(document.createTextNode(myObj.name+" "+myObj.emailId));
  ul.appendChild(li);
  
}
