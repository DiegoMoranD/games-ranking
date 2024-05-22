<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Juegos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class JuegoClientController extends Controller
{
    public function index(){
        $data = Juegos::all();
        return response()->json($data, 200);
    }

    public function store(Request $request){
        $data = new Juegos(($request -> all()));

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logoPath = $logo->store('imgs/juego', 'public');
            $data->logo = $logoPath;
        }

        $data -> save();
        return response() -> json($data, 200);
    }
    
    public function show($id){
        $data = Juegos::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
        $data = Juegos::find($id);
        $data->fill($request->all());
    
        if ($request->hasFile('logo')) {
            // Eliminar la imagen anterior si existe
            if ($data->logo) {
                Storage::disk('public')->delete($data->logo);
            }
            // Subir la nueva imagen
            $logo = $request->file('logo');
            $logoPath = $logo->store('imgs/juego', 'public');
            $data->logo = $logoPath;
        }
    
        $data->save();
        return response()->json($data, 200);
    }
    
    

    public function destroy($id){
        $data = Juegos::find($id);

        if ($data->logo) {
            Storage::disk('public')->delete($data->logo);
        }

        $data->delete();
        return response()->json(['Registro Borrado'], 200);
    }
}
