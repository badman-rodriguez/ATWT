<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Description extends Model
{
    public $fillable = [
      'body',
      'product_id'
    ];

    public function product()
    {
      $this->belongsTo(Product::class);
    }

    public function scopeOfProduct($query, $product_id){
      return $query->where('product_id', $product_id);
    }
}
