<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Description;

class ProductsController extends Controller
{
  // Base page for products
  public function index() {
    $list_of_products = Product::all();

    return  view('products.products', ['list_of_products' => $list_of_products]);

  }

  public function all() {
    //return Product::paginate();
     return Product::paginate(50);
  }

  // Show the form  for creating a new product
  public function create() {
    return view('products.create', []);
  }

  // Store a newly created  product in storage
  public function store(Request $request) {
    return Product::create([
      'name' => $request->input('name'),
      'price' => $request->input('price'),
      'options' => $request->input('options')
    ]);
  }

  // Show page to edit the product
  public function edit($id) {
    return view('edit', []);
  }

  public function item($id) {
      $product = Product::findOrFail($id);
    //  $product_description = Description::ofProduct($id)->get();
      $options = explode(',', $product->options);

      return view('products.item', [
        'product' => $product,
        'options' => $options,
    //    'description' => $product_description
      ]);
  }
  //Update the specified product in storage
  public function update(Request $request, $product_id) {
    $product = Product::findOrFail($product_id);

    $product->update([
      'name'=> $request->input('name'),
      'price'=> $request->input('price'),
      'options'=> $request->input('options')
    ]);

    return $product;
  }

  public function destroy($id) {

  }
}
