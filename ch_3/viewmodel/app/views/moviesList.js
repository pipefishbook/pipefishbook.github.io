var Backbone = require('backbone');
var _ = require('underscore');

var Selection = require('models/selection');

var MovieView = require('views/movie');
var MoviesList = Backbone.View.extend({

  tagName: 'section',

  render: function() {
    var that = this;
    var moviesView = this.collection.map(function(movie) {
      return (new MovieView({model : movie, selection: that.selection})).render().el;
    });
    this.$el.html(moviesView);
    return this;
  },

  initialize: function() {
    this.selection = new Selection();
  }
});
module.exports = MoviesList;
