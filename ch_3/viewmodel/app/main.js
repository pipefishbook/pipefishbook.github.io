var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var Movies = require('collections/movies');

var data = require('../movies.json');

var movies = new Movies(data);

var Monitor = require('./monitor');
var monitor = new Monitor(movies);

var MovieView = require('views/movie');
var MoviesList = require('views/moviesList');

module.exports = { movies: movies, MovieView: MovieView, MoviesList: MoviesList };

