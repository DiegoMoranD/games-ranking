<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Juegos;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class JuegoClientController extends Controller
{
    public function index(){
        $data = Juegos::all();
        return response()->json($data, 200);
    }

    public function store(Request $request){
        $data = new Juegos(($request -> all()));

       
        $data -> save();
        return response() -> json($data, 200);
    }
    
    public function show($id){
        $data = Juegos::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
        $data = Juegos::find($id);
        $data -> fill($request->all());

        // if($request->logo){
        //     $img = $request -> logo;
        //     $folderPath = "/public/imgs/juego/";
        //     $image_parts = explode(";base64", $img);
        //     $image_type_aux = explode("image/", $image_parts[0]);
        //     $image_type = $image_type_aux[1];
        //     $image_base64 = base64_decode($image_parts[1]);
        //     $file = $folderPath . Str::slug($request -> nombre) . '.'.$image_type;
        //     file_put_contents(public_path($file), $image_base64);

        //     $data -> logo = Str::slug($request -> nombre) . '.'.$image_type;
        // }

        // $data -> slug = Str::slug($request->nombre);
        $data -> save();
        return response()->json($data, 200);
    }

    public function destroy($id){
        $empresas = Juegos::find($id);
        $empresas->delete();
        return response()->json(['Registro Borrado'], 200);
    }
}
