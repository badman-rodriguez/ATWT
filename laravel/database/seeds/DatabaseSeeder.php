<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(ProductsTableSeeder::class);
        $this->call(ImageTableSeeder::class);
        $this->call(DescriptionsTableSeeder::class);

        Model::reguard();
    }
}
