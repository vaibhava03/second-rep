

    const express=require('express');

    const app=express();

    const bodyParser=require('body-parser');

    app.use(bodyParser.urlencoded({extended:false}));

    
    app.use('/add-product', (req, res, next) =>{
       
        res.send('<form action ="/product" method="POST">\<input type: "text" name="title" placeholder="add product"> <input type: "number" name="size" placeholder="add size"><button type="submit">submit</button></form>');

        });
    
    app.post('/product',(req, res, next) =>{
        console.log(req.body);
        res.redirect('/');
        });
    
    app.use('/', (req, res, next) =>{
        
        res.send( '<h1>hello from express!</h1>');
        });
    
    app.listen(3000);

