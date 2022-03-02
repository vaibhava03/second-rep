//admin.js--controllers

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
  Product.create({
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
  Product.findByPk(prodId)
  .then(product =>{
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
  Product.findAll()
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
  
  
  
  
  //shop.js--controllers
  
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products =>{
    res.render('shop/product-list', {
      prods:products,
      pageTitle:'All Products',
      path: '/products'
  });
}).catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({where:{id: prodId}})
  // .then(product =>
  //   {
  //     res.render('shop/product-detail', {
  //       product: product[0],
  //       pageTitle: product[0].title,
  //       path: '/products'
  //     });
  //   })
  // .catch(err => console.log(err));
  Product.findByPk(prodId)
  .then(product =>
  {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products =>{
    res.render('shop/index', {
      prods:products,
      pageTitle:'All Products',
      path: '/'
  });
}).catch(err => console.log(err));
};
exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};



  
  
//product.js


const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Product= sequelize.define('product', {
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  }
});
module.exports=Product;
