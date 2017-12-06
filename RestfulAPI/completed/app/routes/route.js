'use strict';
const path = require('path');

module.exports = function(app) {
  var products = require('../controller/controller');
 
  // Product Routes
  app.route('/products')
    .get(products.list_all_products)
    .post(products.create_product);

  app.route('/product/:productId')
    .get(products.view_product)
    .put(products.update_product)
    .delete(products.delete_product);
  
  // front end routes
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../../app_front_end', 'index.html'));
  });

  app.get('/create',function(req,res){
    res.sendFile(path.join(__dirname, '../../app_front_end', 'create.html'));
  });
  
  app.get('/list',function(req,res){
    res.sendFile(path.join(__dirname, '../../app_front_end', 'product_list.html'));
  });

  app.get('/edit',function(req,res){
    res.sendFile(path.join(__dirname, '../../app_front_end', 'edit.html'));
  });
};