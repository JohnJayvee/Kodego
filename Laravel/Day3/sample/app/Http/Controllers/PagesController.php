<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //codes
    public function new(){
        return view('new');
    }
}
