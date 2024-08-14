<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mich extends Model
{
    protected $table = 'new';
    protected $fillable = [
        'fname',
        'lname',
        'email'
    ];
    
    use HasFactory;
}
