//app.js

const path=require('path');
    const express=require('express');

    const bodyParser=require('body-parser');

    const app=express();

    const adminRoutes=require('./routes/admin');
    const shopRoutes=require('./routes/shop');
    const contactRoutes=require('./routes/contact');
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static(path.join(__dirname,'public')));
    app.use(adminRoutes);
    app.use(shopRoutes);
    app.use(contactRoutes);
    app.use((req, res, next) =>
    {
        res.sendFile(path.join(__dirname,  'views', '404error.html'));
    });
    
    app.listen(3000);
    


//admin.js

const path=require('path');
const express=require('express');

const routeDir=require('../util/path');
const router=express.Router();

router.get('/add-product', (req, res, next) =>{
       
res.sendFile(path.join(routeDir, 'views', 'add-product.html'));
    });

router.post('/add-product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
    });

module.exports=router;



//shop.js

const path=require('path');
const express=require('express');

const routeDir=require('../util/path');

const router=express.Router();

router.get('/', (req, res, next) =>{
        
    res.sendFile(path.join(routeDir, 'views', 'shop.html'));
});
    module.exports=router;



//contact.js

const path=require('path');
const express=require('express');

const routeDir=require('../util/path');
const router=express.Router();

router.get('/contactus', (req, res, next) =>{
       
res.sendFile(path.join(routeDir, 'views', 'contactUS.html'));
    });

router.post('/contactus',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/success');
    });
router.get('/success',(req, res, next) =>
{
    res.sendFile(path.join(routeDir, 'views', 'success.html'));

})
module.exports=router;



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
