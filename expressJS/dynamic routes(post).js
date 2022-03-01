//cart.js

const { createSecretKey } = require('crypto');
const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(require.main.filename),
'data', 'data.JSON');

module.exports=class Cart{
    static addProduct(id, productPrice){
       fs.readFile(p, (fileContent, err) =>
       {
           let cart={products:[], totalPrice:0};
           if(!err)
           {
               cart=JSON.parse(fileContent);
           }
           const existingProduct=cart.products.find(prod => prod.id===id);
           const size=cart.products.find(prod =>prod.id===id);
           let updatedProduct;
           if(existingProduct&&size)
           {
               updatedProduct={...existingProduct };
               updatedProduct.qty=updatedProduct.qty+1;
               cart.products=[...cart.products];
               cart.products[existingProductIndex]=updatedProduct;
           }
           else {
               updatedProduct={id:id, qty: 1};
               cart.products=[...cart.products, updatedProduct];
           }
           cart.totalPrice=cart.totalPrice+ +productPrice;
fs.writeFile(p, JSON.stringify(cart), err =>
{
    console.log(err);
});
       });
    }
}
