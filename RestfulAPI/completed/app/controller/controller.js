

var mongoose = require('mongoose'),
Product = mongoose.model('Products');

exports.list_all_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err) {
      res.send(err);
    }

    res.json(product);
  });
};

exports.create_product = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err) {
      res.send(err);
    }

    res.json(product);
  });
};


exports.view_product = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if (err) {
      res.send(err);
    }

    res.json(product);
  });
};


exports.update_product = function(req, res) {
  console.log('things');
  Product.findOneAndUpdate(
    {_id: req.params.taskId}, 
    req.body, 
    {new: true}, 
    function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    }
  );
};


exports.delete_product = function(req, res) {
  Product.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};