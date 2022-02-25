
\\app.js

const express=require('express');

    const bodyParser=require('body-parser');

    const app=express();

    const adminRoutes=require('./routes/admin');
    const shopRoutes=require('./routes/shop');

    app.use(bodyParser.urlencoded({extended:false}));
    app.use('/admin', adminRoutes);
    app.use('/shop', shopRoutes);
   
    app.use((req, res, next) =>
    {
        res.status(404).send('<h1> page not found </h1>');
    });
    
    app.listen(3000);
    
    
    
    
    \\admin.js
    
    const express=require('express');


const router=express.Router();

router.get('/add-product', (req, res, next) =>{
       
    res.send('<form action ="/admin/add-product" method="POST">\<input type: "text" name="title" placeholder="add product"> <input type: "number" name="size" placeholder="add size"><button type="submit">submit</button></form>');

    });

router.post('/add-product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/shop');
    });

module.exports=router;



\\shop.js

const express=require('express');

const router=express.Router();

router.get('/', (req, res, next) =>{
        
    res.send( '<h1>hello from express!</h1>');
    });

    module.exports=router;
    

    
