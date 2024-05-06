<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Empresas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Traits\HasRoles;

use function Laravel\Prompts\error;

class AuthController extends Controller
{
    public function register(Request $request){

        $response = ["success" => false];

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input['password']);

        $user = User::create($input);
        $user->assignRole('admin');

        $response["seccess"] = true;
        // $response["token"] = $user->createToken("Moran")->plainTextToken;

        return response()->json($request, 200);
    }

    public function login(Request $request){
        $response = ["success" => false];

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        if(auth()->attempt(['email' => $request->email, 'password' => $request->password])){
            $user = auth() -> user();
            $user -> hasRole('admin'); //error aqui undefined method hasRole
            
            $response['token'] = $user->createToken("moran.app")->plainTextToken; //error aqui method createToken
            $response['user'] = $user;
            $response['message'] = "Logueado    ";
            $response['success'] = true;
        }
        return response()->json($response,200);
    }

    public function logout(){
        
        $response = ["success" => false];
        auth()->user()->tokens()->delete(); //error aqui method tokens
        $response = [
            "success" => true,
            "message" => "Secion Cerrada"
        ];
        return response()->json($response, 200);
    }

    public function subirEmpresa(Request $request)
    {
        $data = new Empresas($request->all());
        $data -> save();
        return response()->json($data,200);
    }
}
