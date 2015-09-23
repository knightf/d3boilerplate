requirejs.config({
    baseUrl: 'js/app',
    paths: {
        jquery: '../lib/jquery/jquery',
        d3: '../lib/d3/d3'
    }
});

requirejs(['app'], function(app){
    app.init();
});