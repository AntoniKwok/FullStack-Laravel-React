<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //untuk menonaktifkan timestamps
    public $timestamps = false;

    public $incrementing = false;

    public static $rules =  [
      "name" => "required"
    ];

    public static $message = [
        "name.required" => "Nama harus diisi coy"
    ];
}
