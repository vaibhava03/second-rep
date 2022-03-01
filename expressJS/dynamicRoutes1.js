//controllers shop.js



const path=require('path');

const Product=require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => { 
      res.render('shop/product-list',  {
          prods:products,
          path:'/products'
      });
  });
};
exports.getProduct = (req, res, next) => {
  const prodID=req.params.productId;
  Product.findById(prodID, product =>
    {
   
     res.render('shop/product-detail',{product: product});
    });
    };

exports.getIndex = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop', 'cart.html'));
};
  exports.getCart=(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop', 'cart.html'));
  };

  exports.getOrders=(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop', 'orders.html'));
  };

  exports.getCheckout=(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop', 'checkout.html'));
  };
 
 
 
 
 //product-detail.ejs
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/product.css">

</head>
<body>
    <header class="main-header">
        <nav class="main-header-nav">
            <ul class="main-header-item-list">
                <li class="main-header-items"><a  href='/'>Shop</a></li>
                <li class="main-header-items"><a  class="active"  href="/products">Products</a></li>
                <li class="main-header-items"><a  href="/cart">Cart</a></li>
                <li class="main-header-items"><a  href='/orders'>Orders</a></li>
                <li class="main-header-items"><a  href="/add-product">Add Product</a></li>
                <li class="main-header-items"><a  href="/admin-products">Admin Products</a></li>
                <li class="main-header-items"><a  href="/contactus">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main class="centered">
        <h1><%= product.title%></h1>
        <div>
        <img src="<%= product.imageUrl%>" alt="<%= product.title%>">
    </div>
    <h2><%= product.price %></h2>
        <p><%= product.description%></p>
        <form action="/cart" method="POST">
            <button class="btn" type="submit">Add to Cart</button>
        </form>
        
    </main>

</body>

 
