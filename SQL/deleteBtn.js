//product.js

const db=require('../util/database');
const path=require('path');
const p=path.join(path.dirname(require.main.filename), 'data', 'products.json');


module.exports = class Product {
  constructor(id, title, imageUrl,  price, description) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES(?, ?, ?, ?)',
    [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id){
    return db.execute('DELETE FROM products WHERE products.id=?', [id]);
  }

  static fetchAll() {
   return  db.execute('SELECT * FROM products');
  }

  static findById(id) {
  return db.execute('SELECT * FROM products WHERE products.id=?', [id]);
  }
};


//admin.js---controllers

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
  product.save()
  .then(() =>
  {
    res.redirect('/');
  })
  .catch((err) =>
  {
    console.log(err);
  });
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product]) =>{
    if (!product) {
     
      return res.redirect('/');
    }
      res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path:'/edit-product',
      editing: editMode,
      product: product[0]
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
  const updatedProduct=new Product(prodId, updatedTitle, updatedimageUrl, updatedPrice, updatedDescription);
  updatedProduct.save()
  .then(() =>
  {
    res.redirect('/products');
  })
  .catch(err => console.log(err));
  
};


exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fileData]) =>{
      res.render('admin/product-list', {
        prods: rows,
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
  Product.deleteById(prodId)
  .then(() => {
    res.redirect('/products');
  })
  .catch(err => console.log(err));
  
};
