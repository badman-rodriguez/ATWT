<?php

use Illuminate\Database\Seeder;
use App\Product;

class DescriptionsTableSeeder extends Seeder
{
  //
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $product_ids = Product::all()->pluck('id')->toArray();

      array_map(function($id) {
        $date_now = date('Y-m-d H:i:s', strtotime('now'));
        DB::table('descriptions')->insert([
          'product_id' => $id,
          'body' => 'body text',
          'created_at' => $date_now,
          'updated_at' => $date_now
        ]);
      }, $product_ids);
    }
}
