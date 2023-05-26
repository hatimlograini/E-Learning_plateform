<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{

    public function index()
    {
        return Course::select('id','name','price','description','link','img')->get();
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' =>'required',
            'link' =>'required',
            'img' =>'required'
        ]);
        Course::create($request->post());
        return response()->json([
            'message' => 'New item added successfully'
        ]);
    }


    public function show(Course $course)
    {
        return response()->json([
            'course' => $course
        ]);
    }



    public function update(Request $request, Course $course)
    {

        $validatedData = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' =>'required',
            'link' =>'required',
            'img' =>'required'
        ]);

        $course->update($validatedData);

        return response()->json([
            'message' => 'New item updated successfully'
        ]);

    }

    public function destroy(Course $course)
    {
        $course->delete();

        return response()->json([
            'message' => 'New item deleted successfully'
        ]);
    }
}
