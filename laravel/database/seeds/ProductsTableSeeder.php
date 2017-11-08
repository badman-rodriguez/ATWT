<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = ['buttons', 'tshirts', 'magnets', 'posters'];

        array_map(function($product_name) {
          $date_now = date('Y-m-d H:i:s', strtotime('now'));
          DB::table('products')->insert([
            'name' => $product_name,
            'price' => 1000,
            'options' => 'thingswootwoot,thingsandsuch,thingsandbloop,thingsandboop',
            'created_at' => $date_now,
            'updated_at' => $date_now
          ]);
        }, $products);
    }
}
