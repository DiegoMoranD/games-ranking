<?php

use App\Http\Controllers\Api\Admin\EmpresaAdminController;
use App\Http\Controllers\Api\Admin\UserAdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Client\JuegoClientController;
use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JuegosController;
use App\Http\Controllers\EmpresasController;

Route::prefix('v1')->group(function (){
    // Publicas
    Route::get('/public/{slug}', [FrontController::class, 'juegos']);

    //auth
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
    // ! Route::post('/auth/subir/formempresa', [EmpresaAdminController::class, 'subirEmpresa']);
    
    // Privadas
    Route::group(['middleware' => 'auth:sanctum'], function(){
        //Auth
        Route::post('/auth/logout', [AuthController::class, 'logout']); 

        // Rol Cleit
        // ! Route::apiResource('/client/juego',JuegoClientController ::class);

        // Rol Admin
        Route::apiResource('/admin/empresa', EmpresaAdminController::class);
        Route::apiResource('/admin/user', UserAdminController::class);

    });
});
// Route::get('getJuegos',[JuegosController::class,'index']);

// Route::post('storeJuegos',[JuegosController::class,'store']);
//Todo <-------------------------- Rutas para Clientes -------------------------->

Route::get('/juegos',[JuegoClientController ::class, 'index']);

Route::post('/subir/formjuego',[JuegoClientController ::class, 'store']);

Route::delete('/juegos/delete/{id}', [JuegoClientController::class, 'destroy']);

Route::put('/juegos/edit/{id}', [JuegoClientController::class, 'update']);

Route::get('/juegos/edit/{id}', [JuegoClientController::class, 'show']);


//Todo <-------------------------- Rutas para empresas -------------------------->
Route::get('/empresas',[EmpresaAdminController::class,'index']);

Route::post('/subir/formempresa', [EmpresaAdminController::class, 'store']);

Route::delete('/empresas/delete/{id}', [EmpresaAdminController::class, 'destroy']);

Route::put('/empresas/edit/{id}', [EmpresaAdminController::class, 'update']);

Route::get('/empresas/edit/{id}', [EmpresaAdminController::class, 'show']);

// Route::put('empresas/{id}', [EmpresasController::class, 'update']);

// Route::delete('empresas/{id}', [EmpresasController::class, 'destroy']);


Route::prefix('auth')->group(function () {
    Route::post('/subir/formempresa', [EmpresaAdminController::class, 'subirEmpresa']);
});