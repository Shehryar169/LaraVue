const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/

mix.js(['resources/assets/js/admin/app.js'], 'public/js/admin')
    .sass('resources/assets/sass/fonts/font-awesome.scss', 'public/css/fonts')
    .sass('resources/assets/sass/admin/app.scss', 'public/css/admin');

mix.webpackConfig({
    output: {
        publicPath: "/",
        chunkFilename: 'vue-chunk//[name].js'
    },
});