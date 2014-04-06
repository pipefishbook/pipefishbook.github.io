var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  render: function() {
     this.$el.html(this.model.get('title'));
     this.$el.toggleClass('selected', this.model.get('selected'));
     return this;
  },
  initialize: function() {
    _.bindAll(this, "render");
  }
});
module.exports = MovieView;
