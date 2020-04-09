@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">Blog</div>

        <div class="card-body table-responsive">
            <router-view name="blogIndex"></router-view>
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
