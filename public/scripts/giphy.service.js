angular.module('giphyApp')
       .service('giphy', giphyAPIService);

function giphyAPIService($http){
    var API = 'http://api.giphy.com/v1/gifs/';

    this.getRandom = function(){
        return $http.get(API + 'random?api_key=dc6zaTOxFJmzC')
        .then(function(response){
            console.log('response', response);
            return response.data.data.image_url;
        });
    };

    this.getSpecific = function(search){
        return $http.get(API + 'search?q=' + search + '&api_key=dc6zaTOxFJmzC')
        .then(function(response){
            console.log('response', response);
            return response.data.data;
        })
    }






// app.controller('MainController', MainController);
//
// function MainController($http){  //we have to make an http request, which we will then follow up with a get request
//     var main = this;
//     console.log('MainController loaded');
//
//     var API = 'http://api.giphy.com/v1/gifs/';
//
//     main.gifs = {};
//     main.gifsArray = [];
//     // main.lines = [];
//
//     main.getRandom = function(){
//         $http.get(API + 'random?api_key=dc6zaTOxFJmzC')
//         .then(function(response){
//             console.log('response', response);
//             main.gifs = response.data.data.image_url;
//         });
//     };
//
//
//
//     main.getSpecific = function(req, res){
//         main.gifsArray=[];
//         console.log(main.searchin);
//         var search = main.searchin;
//         $http.get(API + 'search?q=' + search + '&api_key=dc6zaTOxFJmzC')
//         .then(function(response){
//             console.log('response', response);
//             main.gifsArray = response.data.data;
//         })
//     }


    // $http.get(API + 'random?api_key=dc6zaTOxFJmzC')
    // .then(function(response){
    //     console.log('response', response);
    //     main.gifs = response.data.results;
    // });


}
