'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ProductSchema = new Schema(
  // add product_name
  // add product_description
  // add created_date
  // add updated_date
  // add status with a default status
);

module.exports = mongoose.model('Products', ProductSchema);