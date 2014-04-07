var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = require('views/movie');
var MoviesList = Backbone.View.extend({

  tagName: 'section',

  render: function() {
    var moviesView = this.collection.map(function(movie) {
      return (new MovieView({model : movie})).render().el;
    });
    this.$el.html(moviesView);
    return this;
  },

  initialize: function() {
    this.movies = this.collection;
  }
});
module.exports = MoviesList;
