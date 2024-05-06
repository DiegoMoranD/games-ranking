<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Juegos extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $fillable=['logo', 'nombre', 'genero', 'descargas', 'votacion', 'empresa_id'];
    protected $table = 'juegos';

    public function empresas(){
        return $this->hasMany(Empresas::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
