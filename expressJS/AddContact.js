//app.js

  const path=require('path');
    const express=require('express');
    const bodyParser=require('body-parser');
    const app=express();

    app.set('view engine', 'pug');
    app.set('views', 'views');
    
    const adminRoutes=require('./routes/admin');
    const shopRoutes=require('./routes/shop');
    const contactRoutes=require('./routes/contact');
    
    app.use(bodyParser.urlencoded({extended:false}));

    app.use(express.static(path.join(__dirname,'public')));

    app.use(adminRoutes);
    app.use(shopRoutes);
    app.use(contactRoutes);

    app.use(productsController.getError);
    
    app.listen(3000);
    


//admin.js

const path=require('path');

const express=require('express');
const productsController=require('../controllers/products.js');

const router=express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);

module.exports=router;



//shop.js

const path=require('path');
const express=require('express');

const productsController=require('../controllers/products.js');
const router=express.Router();

router.get('/', productsController.getProducts);
    module.exports=router;


//contact.js

const path=require('path');
const express=require('express');

const routeDir=require('../util/path');
const router=express.Router();
const productsController=require('../controllers/products.js');

router.get('/contactus', productsController.getContacts);

router.post('/contactus',productsController.postContacts);
router.get('/success',productsController.getSuccess);
module.exports=router;



//products.js

const path=require('path');
const Product=require('../models/product');


exports.getAddProduct=(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    };
exports.postAddProduct=(req, res, next) =>{
   const product=new Product(req.body.title);
   product.save();
    res.redirect('/');
    };

exports.getProducts=(req, res, next) =>{
        const products=Product.fetchAll((products)=>
        {
        res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
        });
        };
  
    exports.getContacts=(req, res, next) =>{
       
        res.sendFile(path.join(__dirname,'../', 'views', 'contactUS.html'));
            };
            
    exports.postContacts=(req, res, next) =>{
        console.log(req.body);
        res.redirect('/success');
        };
    
    exports.getSuccess=(req, res, next) =>
    {
        res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
    
    };
    

exports.getError=(req, res, next) =>
    {
        res.sendFile(path.join(__dirname, '../', 'views', '404error.html'));
    };



//product.js---models

const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile=cb =>
{
  fs.readFile(p, (fileContent, err) =>
    {
      if(err)
      {
      return cb([]);
      }
      else{
      cb(JSON.parse(fileContent));
      }
    });
};

module.exports=class Product{
  constructor(t){
    this.title=t;
  }
  save()
  {
    getProductsFromFile(products =>
      {
        products.push(this);
     fs.writeFile(p, JSON.stringify(products), (err) =>
     {
       console.log(err);
     });
      });
  }
  static fetchAll(cb)
  {
    getProductsFromFile(cb);
  }
};





//error404.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="/css/main.css">
   
</head>
<body>
    <header class="main-header">
        <nav class="main-header-nav">
            <ul class="main-header-item-list">
                <li class="main-header-items"><a  href='/'>SHOP</a></li>
                <li class="main-header-items"><a  class="active" href="/add-product">Add Product</a></li>
                <li class="main-header-items"><a  href="/contactus">Contact Us</a></li>

            </ul>
        </nav>
    </header>
    </header>
    <main>
        <h1>Page not found</h1>
        </form>
    </main>
</body>
</html>



//add-product.html

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
                <li class="main-header-items"><a  href='/'>SHOP</a></li>
                <li class="main-header-items"><a  class="active" href="/add-product">Add Product</a></li>
                <li class="main-header-items"><a  href="/contactus">Contact Us</a></li>

            </ul>
        </nav>
    </header>
    <main>
        <form action="/add-product" method="POST" class="product-form" >
            <div class="form-control">
                <label for="title" >Title</label>
            <input type="text" name="title" id="title">
            
            </div>
            <button type="submit">Add Product</button>
        </form>
    </main>
</body>
</html>



//contactUS.html

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
                <li class="main-header-items"><a  href='/'>SHOP</a></li>
                <li class="main-header-items"><a   href="/add-product">Add Product</a></li>
                <li class="main-header-items"><a class="active" href="/contactus">Contact Us</a></li>

            </ul>
        </nav>
    </header>
    <main>
        <form action="/contactus" method="POST" class="product-form" >
            <div class="form-control">
                <label for="name" >Name</label>
            <input type="text" name="name" id="name">
            <label for="email" >Email</label>
            <input type="email" name="email" id="email">
            </div>
            <button type="submit" action="/success">Submit</button>
        </form>
    </main>
</body>
</html>



//shop.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header class="main-header">
        <nav class="main-header-nav">
            <ul class="main-header-item-list">
                <li class="main-header-items"><a class="active" href='/'>SHOP</a></li>
                <li class="main-header-items"><a href="/add-product">Add Product</a></li>
                <li class="main-header-items"><a  href="/contactus">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>My Products</h1>
        <p>List of all the products...</p>
        
    </main>
</body>
</html>



//success.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="/css/main.css">
   
</head>
<body>
    <header class="main-header">
        <nav class="main-header-nav">
            <ul class="main-header-item-list">
                <li class="main-header-items"><a  href='/'>SHOP</a></li>
                <li class="main-header-items"><a  class="active" href="/add-product">Add Product</a></li>
                <li class="main-header-items"><a  href="/contactus">Contact Us</a></li>

            </ul>
        </nav>
    </header>
    </header>
    <main>
        <h1>Form successfully filled</h1>
        </form>
    </main>
</body>
</html>
