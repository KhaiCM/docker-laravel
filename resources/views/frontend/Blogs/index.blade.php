@extends('frontend.layouts.master')

@section('content')
<div class="container">


            <router-view name="blogHome"></router-view>
            <router-view></router-view>

</div>
@endsection
