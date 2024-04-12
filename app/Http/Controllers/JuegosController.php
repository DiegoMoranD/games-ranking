<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Juegos;

class JuegosController extends Controller
{
    public function index()
    {
        $juegos = Juegos::all();
        return response()->json(compact('juegos'),200);
    }
}
