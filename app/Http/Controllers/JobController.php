<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function all(){
        $jobs = Job::with('company')->get();

        return $jobs;
    }

    public function latest(){
        $latest = Job::latest()->limit(6)->with('company')->get();

        return $latest;
    }

    public function jobDetail($id){
        $job = Job::latest()->limit(6)->with('company')->where('id','=',$id)->get();

        return $job;
    }

    public function search($title,$location){
        // $title = $request->input('title');
        // $location = $request->input('location');
    
        
        $jobs = Job::where('title', 'LIKE', "%$title%")
                      ->where('location', 'LIKE', "%$location%")
                      ->get();

                      

        return $jobs;
    }

    public function countCategories(){
        $categories = [
            'Desarrollo',
            'Datos',
            'Diseño',
            'Redes',
            'Consultoria',
            'ProjectManager',
            'Soporte',
            'Ciberseguridad',
        ];

        $categoryCounts = [];

        foreach ($categories as $category) {
            $count = Job::where('area', '=', $category)->count();
            $categoryCounts[$category] = $count;
        }
    
        return $categoryCounts;
    }

    public function listJobsByCategory($category){
        $jobs = Job::where('area','=',$category)->get();

        return $jobs;
    }

    public function listJobsByCompany($id){
        $jobs = Job::where('company_id','=',$id)->get();

        return $jobs;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Job $job)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        //
    }
}
