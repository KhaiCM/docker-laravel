@extends('frontend.layouts.master')

@section('content')
    <router-view name="blogHome"></router-view>
    <router-view></router-view>
@endsection
