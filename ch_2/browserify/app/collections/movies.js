    var Backbone = require('backbone');
    var Movie = require('models/movie');
    var Movies = Backbone.Collection.extend({
      model: Movie,

      // Unselect all models
      resetSelected: function() {
        this.each(function(model) {
          model.set({"selected": false}, {silent: true});
        });
      },

      // Select a specific model from the collection
      selectByID: function(id) {
        this.resetSelected();
        var movie = this.get(id);
        movie.set({"selected": true});
        return movie.id;
      }
    })
    module.exports = Movies;
