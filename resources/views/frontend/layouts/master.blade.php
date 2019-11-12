
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js"> <!--<![endif]-->
    
<!-- Mirrored from pivot.mediumra.re/blog-masonry-sidebar.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 19 Apr 2018 08:07:52 GMT -->
<head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- CSRF Token -->
    	<meta name="csrf-token" content="{{ csrf_token() }}">

    	<!-- Scripts -->
    	<script src="{{ asset('js/app.js') }}" defer></script>

        <title>Vato | Blog</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700%7CRaleway:700' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="app">
		@yield('content')
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
				