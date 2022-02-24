
const express=require('express');
const app=express();
app.use((req, res, next) =>{
    console.log('In middleware');
    next();
});
app.use((req, res, next) =>{
    console.log('In anothermiddleware');
    res.send("<h1>hello from express!</h1>");

});

app.listen(3000);

