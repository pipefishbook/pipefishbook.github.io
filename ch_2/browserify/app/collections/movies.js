  var Backbone = require('backbone');
  var Movie = require('models/movie');
  var Movies = Backbone.Collection.extend({
    model: Movie 
  });
  module.exports = Movies;
