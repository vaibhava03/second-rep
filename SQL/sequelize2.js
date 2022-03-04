

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
    const sequelize=require('./util/database');
    const Product=require('./models/product');
    const User=require('./models/user');
    app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static(path.join(__dirname,'public')));
    app.use((req, res, next) =>
    {
      User.findByPk(1)
      .then(user  =>
        {
          req.user=user;
          next();
        })
        .catch(err => console.log(err));
    });

    app.use(adminRoutes);
    app.use(shopRoutes);
    app.use(contactRoutes);

    app.use(productsController.get404);


    Product.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
    User.hasMany(Product);

    sequelize
    .sync()
    .then(result =>{
     return User.findByPk(1);
    })
    .then(user =>
      {
        if(!user)
        {
          return User.create({name:'max',email:'test@gmail.com'});
        }
        return user;
      })
      .then(User =>
        {
          //console.log(User);
        })
    .catch(err =>{
        console.log(err);
    });

    app.listen(3000);







//admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
 req.user.createProduct( {
  title: title, 
  price: price,
  imageUrl: imageUrl,
  description: description
 
  }).then(result =>{
    res.redirect('/admin-products');
  })
  .catch(err =>{
    console.log(err);
  })
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user.getProducts( {where: {id: prodId}})
  //Product.findByPk(prodId)
  .then(products =>{
    const product=products[0];
    if (!product) {
     
      return res.redirect('/');
    }
      res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path:'/edit-product',
      editing: editMode,
      product: product
  });
  })
  .catch(err => console.log(err));
};

exports.postEditProduct=(req, res, next) =>
{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedimageUrl=req.body.imageUrl;
  const updatedPrice=req.body.price;
  const updatedDescription=req.body.description;
  Product.findByPk(prodId)
  .then(product =>
  {
    product.title=updatedTitle;
    product.price=updatedPrice;
    product.imageUrl=updatedimageUrl;
    product.description=updatedDescription;
    return product.save();
  })
  .then(result =>{
    res.redirect('/admin-products');
  })
  .catch(err => console.log(err));
  
};


exports.getProducts = (req, res, next) => {
  req.getProducts()
    .then(products =>{
      res.render('admin/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path:'/admin-products'
    });
  })
    .catch((err) => {
      console.log(err);
    });
  };

exports.postDeleteProducts=(req, res, next) =>
{
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product =>
    {
      return product.destroy();
    })
    .then(result =>
      {
        console.log(deleted);
      })
      .catch(err => console.log(err));
 
    res.redirect('/admin-products');
  };
  

 
