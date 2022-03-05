 
  const path=require('path');
    const express=require('express');
    const bodyParser=require('body-parser');
    const app=express();
    const sequelize=require('./util/database');
    const User=require('./models/user');

    const axios  = require('axios');

    const cors = require('cors');

    //app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static(path.join(__dirname,'public')));

    app.use(bodyParser.json());
    app.use(cors());

    app.get('/getusers', (req, res) =>
    {
      User.findAll()
      .then(users =>
       {
         res.json(users);
       })
        .catch(err => console.log(err));
    });

   app.post('/getusers',(req, res) =>
   {
      User.create({
      name:req.body.name,
      email:req.body.emailId
     }).then(users =>
      {
        res.send(users);
      
      })
      .catch(err => console.log(err))
   });
  
  
   app.delete('/getusers',(req, res)=>
    {
      emailId=req.body.emailId;
      console.log(emailId);
     User.destroy({ where: { email:req.body.emailId}})
         .then()
      .catch(err => console.log(err));
    });

    Product.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
    User.hasMany(Product);

    User.hasOne(Cart);
    Cart.belongsTo(User);

    Cart.belongsToMany(Product, { through: CartItem});
    Product.belongsToMany(Cart, { through: CartItem});


    sequelize
    .sync()
    .then(result =>{
      console.log(result);
    })









//html file


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h4>User Details</h4>
   

       
   <form id="Form">
   <label for="UserName" >User Name:</label>   
     <input type="text" id="Name"><br>
     <label for="email">email:</label>
     <input type="email" id="email"><br>
     <input type="submit" id='subMit' style="
     width: 13%;
     background: rgb(46, 49, 87);
     color: rgb(230, 210, 210);
     border-radius: 5px;
     margin:20px;" value="SUBMIT" style="font-size:larger;"> 
     </form>
     <ul id="user-details">
         
     </ul>
     <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js'></script>
<script >
 const myForm = document.getElementById("Form");

  
myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{

    e.preventDefault();
  const name = document.getElementById("Name").value;
  const emailId = document.getElementById("email").value;
  
  
    const myObj = {
      name: name,
      emailId: emailId 
    }
    axios.post('http://localhost:3000/getusers', myObj)
    .then((response) => 
    {
        console.log(response)
    })
    .catch((err) =>
    {
        document.body.innerHTML=document.body.innerHTML+'<h4>something went wrong</h4>';
        console.log(err);
    });
   // localStorage.setItem("userDetails"+emailId, JSON.stringify(myObj));
    
    addElement(myObj);
  };


  window.addEventListener('DOMContentLoaded',() =>
  {
      axios.get('http://localhost:3000/getusers')
      .then((response) =>
      {
        for(var i=0;i<response.data.length;i++) {  
            addElement(response.data[i]);
      }
    })
    .catch((error) =>
        {
            console.log(error);
        });
    
  });


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
    
   // li.remove();
  });
  
  li.appendChild(edit);

  const Delete = document.createElement("input");
  Delete.type = "button";
  Delete.value = "Delete";
  Delete.addEventListener("click", () => {
    //localStorage.removeItem("userDetails" + myObj.emailId);
    document.getElementById("Name").value = myObj.name;
    document.getElementById("email").value = myObj.emailId;
  
    axios.delete('http://localhost:3000/getusers', myObj)
    .then((response) => 
    {
      li.remove();
    })
    .catch((err) =>
    {
    
        document.body.innerHTML=document.body.innerHTML+'<h4>something went wrong</h4>';
        console.log(err);
  })
})
  li.appendChild(Delete);
  ul.appendChild(li);
}
 
  </script>
</body>
</html
