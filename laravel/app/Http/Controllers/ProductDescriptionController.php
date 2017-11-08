<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Description;
use App\Product;

class ProductDescriptionController extends Controller
{
    // Base page for products
    public function index($product_id) {
      return Description::ofProduct($product_id)->get();
    }

    // Show the form  for creating a new product
    public function create() {

    }

    // Store a newly created  product in storage
    public function store($product_id, Request $request) {
      $product = findOrFail($product_id);

      $product->descriptions()->save(new Description([
        'body' => $request->input('body')
      ]));

      return $product->descriptions;
    }

    // Show page to edit the product
    public function edit($id) {

    }

    //Update the specified product in storage
    public function update(Request $request) {

    }

    public function destroy($id) {

    }
}
