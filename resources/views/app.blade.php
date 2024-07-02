<!DOCTYPE html>
{{-- {{ str_replace('_', '-', app()->getLocale()) }} --}}
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Participe toi aussi et fais un don pour
                                aider ceux dans le besoin, les petits gestes du
                                quotidien peuvent changer la vie des plus
                                demunis.">
                                <meta name="author" content="smilylab" />
        <link rel="shortcut icon" href="{{ asset('assets/logo.jpg') }}" type="image/png">
        <title inertia>{{ config('app.name', 'Faites un don') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
