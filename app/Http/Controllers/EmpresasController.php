<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Empresas;

class EmpresasController extends Controller
{
    public function index(){
        $empresas = Empresas::all();
        return response()->json(compact('empresas'),200);
    }

    public function store(Request $request){
    $request->validate([
        'nombre' => 'required|string',
        'logo' => 'required|string',
        'tipo' => 'required|string',
        'ano' => 'required|integer',
        'empleados' => 'required|integer',
    ]);

    $empresas = new Empresas();
    $empresas->nombre = $request->input('nombre');
    $empresas->logo = $request->input('logo');
    $empresas->tipo = $request->input('tipo');
    $empresas->ano = $request->input('ano');
    $empresas->empleados = $request->input('empleados');

    $empresas->save();

    return response()->json(['message' => 'Empresa registrada exitosamente'], 201);
}

public function update(Request $request, $id)
{
    $request->validate([
        'nombre' => 'required|string',
        'logo' => 'required|string',
        'tipo' => 'required|string',
        'ano' => 'required|integer',
        'empleados' => 'required|integer',
        // Agregar más reglas de validación según tus necesidades
    ]);

    $empresa = Empresas::findOrFail($id);
    $empresa->nombre = $request->input('nombre');
    $empresa->logo = $request->input('logo');
    $empresa->tipo = $request->input('tipo');
    $empresa->ano = $request->input('ano');
    $empresa->empleados = $request->input('empleados');
    // Agregar más asignaciones de atributos según la estructura de tu modelo

    $empresa->save();

    return response()->json(['message' => 'Empresa actualizada exitosamente'], 200);
}

public function destroy($id){
    $empresas = Empresas::find($id);
    $empresas->delete();
    return response()->json(['Registro Borrado'], 200);
}

}
