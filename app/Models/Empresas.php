<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresas extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $fillable=['logo', 'tipo', 'nombre', 'ano', 'empleados'];
    protected $table = 'empresas';

    public function juegos(){
        return $this->belongsTo(Juegos::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
