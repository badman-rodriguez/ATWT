<?php

use Illuminate\Database\Seeder;
class ImageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $imageObj = new stdClass();//create a new
      $imageObj->url = "http://via.placeholder.com/350x150";
      $imageObj->name = 'Image 1';

      $imageObj2 = new stdClass();//create a new
      $imageObj2->url = "http://via.placeholder.com/350x150";
      $imageObj2->name = 'Image 2';

      $imageObj3 = new stdClass();//create a new
      $imageObj3->url = "http://via.placeholder.com/350x150";
      $imageObj3->name = 'Image 3';

      $imageObj4 = new stdClass();//create a new
      $imageObj4->url = "http://via.placeholder.com/350x150";
      $imageObj4->name = "Image 4";

      $imageArray = array($imageObj, $imageObj2, $imageObj3, $imageObj4);

    array_map(function($image) {
        $date_now = date('Y-m-d H:i:s', strtotime('now'));

        DB::table('images')->insert([
          'name' => $image->name,
          'image' => null,
          'url' => $image->url,
          'created_at' => $date_now,
          'updated_at' => $date_now
        ]);
      }, $imageArray);
    }
}
