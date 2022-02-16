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
 
  const edit = document.createElement("input");
  
  edit.type = "button";
  edit.value = "Edit";
  edit.addEventListener("click", () => {
    
    document.getElementById("Name").value = myObj.name;
    document.getElementById("email").value = myObj.emailId;
    li.remove();
  });
  
  li.appendChild(edit);

  const Delete = document.createElement("input");
  Delete.type = "button";
  Delete.value = "Delete";
  Delete.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + myObj.emailId);
    li.remove();
  });

  li.appendChild(Delete);
  ul.appendChild(li);
}
