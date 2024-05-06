<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Juegos;

class JuegosController extends Controller
{
    public function index(){
        $juegos = Juegos::all();
        return response()->json(compact('juegos'),200);
    }

    public function store(Request $request){
        $request->validate([
            'logo' => 'string',
            'nombre' => 'required|string',
            'genero' => 'required|string',
            'descargas' => 'required|integer',
            'votacion' => 'required|numeric|between:1.0,10.0',
            'empresa_id' => 'required|integer',
        ]);
    
        $juegos = new Juegos();
        $juegos->logo = $request->input('logo');
        $juegos->nombre = $request->input('nombre');
        $juegos->genero = $request->input('genero');
        $juegos->descargas = $request->input('descargas');
        $juegos->votacion = $request->input('votacion');
        $juegos->empresa_id = $request->input('empresa_id');

    
        $juegos->save();
    
        return response()->json(['message' => 'juego registrado exitosamente'], 201);
    }

    public function update(Request $request, $id){
        $request->validate([
            'logo' => 'required|string',
            'nombre' => 'required|string',
            'genero' => 'required|string',
            'descargas' => 'required|integer',
            'votacion' => 'required|numeric|between:1.0,10.0',
            'empresa_id' => 'required|integer',
        ]);
    
        $juegos =  Juegos::findOrFail($id);
        $juegos->logo = $request->input('logo');
        $juegos->nombre = $request->input('nombre');
        $juegos->genero = $request->input('genero');
        $juegos->descargas = $request->input('descargas');
        $juegos->votacion = $request->input('votacion');
        $juegos->empresa_id = $request->input('empresa_id');

    
        $juegos->save();
    
        return response()->json(['message' => 'juego registrado exitosamente'], 201);
    }

    public function show($id){
        $juegos = Juegos::find($id);
        return response()->json($juegos, 200);
    }
    
}
