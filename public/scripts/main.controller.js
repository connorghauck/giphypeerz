angular.module('giphyApp')
       .controller('MainController', MainController);

function MainController(giphy) {
  var main = this;
  console.log('MainController loaded');

    main.gifs = null;
    main.gifsArray = [];

    main.forRandom = function(){
        giphy.getRandom().then(function(gifs){
            main.gifs = [];
            main.gifs = gifs;
        });
};
    main.forSpecific = function(){
        giphy.getSpecific(main.searchin).then(function(gif){
            main.gifsArray = [];
            main.gifsArray = gif;
        });
};
}



    // main.getRandom = function(){
    //    $http.get(API + 'random?api_key=dc6zaTOxFJmzC')
    //    .then(function(response){
    //        console.log('response', response);
    //        main.gifs = response.data.data.image_url;
    //    });
    // };







//   main.getFilmData = function() {
//     main.lines = [];
//     main.class = 'no-scroll';
//
//     var promise = swapi.getFilmData(main.selected);
//     promise.then(function(film){
//       main.lines = film.opening_crawl.split('\n');
//       main.class = 'scroll';
//     });
//   };
// }
