@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">Companies</div>

        <div class="card-body table-responsive">
            <router-view name="companiesIndex"></router-view>
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
