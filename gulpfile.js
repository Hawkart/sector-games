const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir(function(mix) {
    mix.scripts([
        '../bower/jquery/dist/jquery.js',
        '../bower/bootstrap/dist/js/bootstrap.js',
        '../bower/bootstrap-validator/dist/validator.min.js',
        '../bower/jasny-bootstrap/dist/js/jasny-bootstrap.min.js',
        '../js/vendor/jquery.slimscroll.js',
        '../js/vendor/dropdown-bootstrap-extended.js',
        '../bower/bootstrap-select/dist/js/bootstrap-select.min.js',
        '../bower/moment/min/moment-with-locales.min.js',
        '../bower/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
        '../js/vendor/isotope.js',
        '../js/vendor/lightgallery-all.js',
        '../js/vendor/froogaloop2.min.js',
        '../js/vendor/gallery-data.js',
    ], 'public/js/vendor.js').webpack('app.js');
    
    mix.sass([
        '../bower/morris.js/morris.css',
        '../bower/datatables/media/css/jquery.dataTables.min.css',
        '../bower/jquery-toast-plugin/dist/jquery.toast.min.css',
        '../bower/bootstrap-select/dist/css/bootstrap-select.min.css',
        '../bower/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
        '../bower/bootstrap/dist/css/bootstrap.min.css',
        '../css/font-awesome.min.css',
        '../css/themify-icons.css',
        '../css/animate.css',
        '../css/simple-line-icons.css',	
        '../css/linea-icon.css',	
        '../css/pe-icon-7-stroke.css',
        '../css/pe-icon-7-styles.css',
        '../css/material-design-iconic-font.min.css',	
        '../css/filter.css',        
        '../bower/owl.carousel/dist/assets/owl.carousel.min.css',
        '../bower/owl.carousel/dist/assets/owl.theme.default.min.css',
        '../css/lightgallery.css',
        '../bower/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css',
        "../sass/app.scss"
    ], 'public/css/app.css');
    
});