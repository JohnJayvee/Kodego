<?php

namespace App\Http\Controllers;

use App\Models\Mich;
use Illuminate\Http\Request;
use App\Http\Controllers\MichController;

class MichController extends Controller
{
    //get - all
    public function index(){
        
        $Data_fr_db = Mich::all();
        if($Data_fr_db->count() > 0){
            $data = [
                'status' => 200, 
                'data' => $Data_fr_db];
            return response()->json($Data_fr_db,200);
        }else{
            return response()->json(['status'=> 404, 'mess'=> 'not found'],404);
        };
    }

    //send data to db
    public function store(Request $request){
        $Data_fr_db = Mich::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email
        ]);

        if($Data_fr_db){
          return
            response()->json([
            'status' => 200,
            'message' => 'added successfully'
            ],200);
        }else{
            return
            response()->json([
                'status' => 404,
                'message' => 'Error'
                ],404);
        }
    }

    //select one specific record from db based on id
    public function show($id){
        $Data_fr_db = Mich::find($id);
        if($Data_fr_db){
            return response()->json([
                'status' => 200,
                'data' => $Data_fr_db

            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No records found'
            ]);
        }
    }


    public function edit(Request $request, int $id){
        $Data_fr_db = Mich::find($id);

        if($Data_fr_db){                       
            $Data_fr_db->update([
                'fname' => $request->fname,
                'lname' => $request->lname,
                'email' => $request->email
            ]);

            if($Data_fr_db){
                return
                  response()->json([
                  'status' => 200,
                  'message' => 'Updated successfully'
                  ],200);
              }else{
                  return
                  response()->json([
                      'status' => 404,
                      'message' => 'Error'
                      ],404);
              }
        }else{
            return
                  response()->json([
                      'status' => 404,
                      'message' => 'Error'
                      ],404);
        }

        

       
    }


    public function destroy($id){
        
        $Data_fr_db = Mich::find($id);

        $Data_fr_db->delete();

        if($Data_fr_db){
            return response()->json([
                'status' => 200,
                'message' => 'Deleted successfully'
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Error'
            ]);
        }
    }
}
