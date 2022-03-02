//admin.js controllers

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
  const product = new Product(null, title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
     
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path:'/edit-product',
      editing: editMode,
      product: product
  });
  });
};

exports.postEditProduct=(req, res, next) =>
{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedimageUrl=req.body.imageUrl;
  const updatedPrice=req.body.price;
  const updatedDescription=req.body.description;
  const updatedProduct=new Product(prodId, updatedTitle, updatedimageUrl, updatedPrice, updatedDescription);
  updatedProduct.save();
  res.redirect('/products');
};


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/product-list', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin-products'
    });
  });
};

exports.postDeleteProducts=(req, res, next) =>
{
  const prodId = req.body.productId;
  console.log(prodId);
  Product.deleteById(prodId);
  res.redirect('/products');
};



//admin.js ---routes

const path=require('path');

const express=require('express');
const productsController=require('../controllers/admin.js');
const { route } = require('./shop.js');

const router=express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);


router.get('/edit-product/:productId', productsController.getEditProduct)
router.post('/edit-product',productsController.postEditProduct);
router.post('/delete-product/:productId',productsController.postDeleteProducts);
router.get('/admin-products',productsController.getProducts);
module.exports=router;


//product.js

const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(require.main.filename), 'data', 'products.json');


const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl,  price, description) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    
  }

  save() {
    
    getProductsFromFile(products => {
      if(this.id)
    {
      const existingProductIndex=products.findIndex(prod =>prod.id===this.id);
      const updatedProducts=[...products];
      updatedProducts[existingProductIndex]=this;
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log(err);
    });
  }
    else{
    this.id = Math.random().toString();
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    }
    });
  }
  static deleteById(id){
    getProductsFromFile(products => {
     
      const updatedProducts=products.filter(prod =>prod.id!==id);
    fs.writeFile(p, JSON.stringify(updatedProducts), err =>
    {
     console.log(err);
    });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p =>p.id === id);
      cb(product);
    });
  }
};

