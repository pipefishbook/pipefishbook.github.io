var Backbone = require('backbone');
var _ = require('underscore');

// data
var Movies = require('collections/movies');
var data = require('../../../movies.json');
var movies = new Movies(data);

// views
var Movies = require('collections/movies');
var MoviesList = require('views/moviesList');

var movies = new Movies(data);

var moviesList;

var MoviesRouter = Backbone.Router.extend({
  routes: {
    'movies/:id':    'selectMovie',
    '':              'showMain'
  },
  selectMovie: function(id) {
    console.log("+");
    moviesList = MoviesList.getInstance({el: '#movies', collection: movies, router: this});
    moviesList.render();
    movies.selectByID(id);
  },
  showMain: function() {
    console.log("-");
    moviesList = MoviesList.getInstance({el: '#movies', collection: movies, router: this});
    moviesList.render();
    moviesList.render();
  }
});
module.exports = MoviesRouter;
