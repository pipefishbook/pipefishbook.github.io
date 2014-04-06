var Backbone = require("backbone");
  var Movie = Backbone.Model.extend({
    defaults: {
      title: "default",
      year: 0,
      description: "empty",
      selected: false
    }
  });
  module.exports = Movie;
