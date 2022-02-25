const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');

const grpApp=express();

grpApp.use(bodyParser.urlencoded({extended:false}));
var user_Name;
grpApp.get('/login', (req, res, next) =>
{
    
    
    res.send(`<form action="/login" method="POST" id="myform"><input type ="text" name ="UserName" id="username"><button type="submit">LOGIN</button></form>
    <script>
    const Form=document.getElementById("myform");
    Form.addEventListener("submit", () =>{
        localStorage.setItem("Input",JSON.stringify(document.getElementById("username").value));
        user_Name.push(localStorage.getItem("Input")); 
    });
    </script>`);
});

grpApp.post('/login', (req, res, next) =>{
    user_Name=req.body.UserName;
    res.redirect('/');
});

grpApp.get('/', (req, res, next) =>
{
    res.send('<form action="/"  method="POST"><input type ="text" name ="Message"><button type="submit">SEND</button></form>');

});
grpApp.post('/' ,(req, res, next) =>
{
  
   fs.writeFileSync('message.txt' , user_Name+':'+req.body.Message);
   
});

grpApp.listen(4000);
