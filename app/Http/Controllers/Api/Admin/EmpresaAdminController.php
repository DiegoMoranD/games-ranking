<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Empresas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EmpresaAdminController extends Controller
{
    public function index(){
        $data = Empresas::all();
        return response()->json($data, 200);
    }

    public function store(Request $request){
        $data = new Empresas($request->all());

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logoPath = $logo->store('imgs/empresa/', 'public');
            $data->logo = $logoPath;
        }

        $data -> save();
        return response()->json($data,200);
    }
    
    public function show($id){
        $data = Empresas::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
    $data = Empresas::find($id);
    $data->fill($request->except('logo')); // Fill all fields except logo

    if ($request->hasFile('file')) {
        $logo = $request->file('file');
        $logoPath = $logo->store('imgs/empresa', 'public');
        $data->logo = $logoPath;
        if ($data->logo !== $logoPath) {
            Storage::delete('public/' . $data->logo);
        }
    }

    $data->save();
    return response()->json($data, 200);
}

    public function destroy($id) {
        $empresa = Empresas::find($id);
    
        if ($empresa->logo) {
            Storage::disk('public')->delete($empresa->logo);
        }
    
        $empresa->delete();
        return response()->json(['Registro Borrado'], 200);
    }
    
}
