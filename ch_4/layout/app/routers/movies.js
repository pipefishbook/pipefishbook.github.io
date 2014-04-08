var Backbone = require('backbone');
var _ = require('underscore');

// data
var Movies = require('collections/movies');
var data = require('../../../movies.json');
var movies = new Movies(data);

// views
var Movies = require('collections/movies');
var MoviesList = require('views/moviesList');

var moviesList;

var MoviesRouter = Backbone.Router.extend({
  routes: {
    'movies/:id':    'selectMovie',
    '':              'showMain'
  },
  selectMovie: function(id) {
    console.log("+");
    moviesList.render();
    movies.resetSelected();
    movies.selectByID(id);
  },
  showMain: function() {
    console.log("-");
    movies.resetSelected();
    moviesList.render();
  },
  initialize: function() {
    moviesList = MoviesList.getInstance({
      el: '#movies', collection: movies, router: this
    });
  }
});
module.exports = MoviesRouter;
