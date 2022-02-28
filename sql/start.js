//app.js

    const path=require('path');
    const express=require('express');
    const bodyParser=require('body-parser');
    const app=express();
    app.set('view engine', 'ejs');
    const adminRoutes=require('./routes/admin');
    const shopRoutes=require('./routes/shop');
    const contactRoutes=require('./routes/contact');
    const productsController=require('./controllers/error.js');
    const db=require('./util/database');
    app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static(path.join(__dirname,'public')));
    

    app.use(adminRoutes);
    app.use(shopRoutes);
    app.use(contactRoutes);
    db.execute('SELECT * FROM products');

    app.use(productsController.getError);
    
    app.listen(3000);
 
 
 
 
    //database.js
    
    
    const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'nodecomplete'
});

module.exports=pool.promise();
