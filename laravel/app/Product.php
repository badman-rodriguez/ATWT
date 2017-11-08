<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $fillable = [
      'name',
      'price',
      'options'
    ];

    public function descriptions()
    {
      return $this->hasMany(Description::class);
    }
}
