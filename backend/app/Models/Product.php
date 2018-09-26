<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $hidden = ["price"];
    public $incrementing = false;


    public function category(){
        return $this->belongsTo(Category::class, "category_id", "id");
    }
    //custom harus di append
    protected $appends = ["formatted_price", "final_price", "upload_date"];

    public function getFormattedPriceAttribute(){
        return 'Rp. '.$this['price'];
    }

    public function getFinalPriceAttribute(){
        return $this['price'] * 0.9;
    }

    public function getUploadDateAttribute(){
        return Carbon::parse($this['created_at'])->diffForHumans();
    }

    public function scopeTermurah(){
        return $this->where("price", ">", "2000")->get();
    }
}
