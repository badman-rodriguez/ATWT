'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  product_name: {
    type: String,
    required: 'Kindly enter the name of the Product'
  },
  product_description: {
    type: String,
    required: 'Kindly enter the description of the Product'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'published']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Products', ProductSchema);