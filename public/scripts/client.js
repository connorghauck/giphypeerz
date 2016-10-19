var app = angular.module('giphyApp', []);

app.controller('MainController', MainController);

function MainController($http){  //we have to make an http request, which we will then follow up with a get request
    var main = this;
    console.log('MainController loaded');

    var API = 'http://api.giphy.com/v1/gifs/';

    main.gifs = [];
    // main.lines = [];

    main.getRandom = function(){
        $http.get(API + 'random?api_key=dc6zaTOxFJmzC')
        .then(function(response){
            console.log('response', response);
            main.gifs = response.data.data.image_url;
        });
    };

    // $http.get(API + 'random?api_key=dc6zaTOxFJmzC')
    // .then(function(response){
    //     console.log('response', response);
    //     main.gifs = response.data.results;
    // });


}
