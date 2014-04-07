var Backbone = require('backbone');
var $ = require('jquery-untouched');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><%= title %><hr></h1>',

  events: {
    'click': 'selectMovie'
  },

  selectMovie: function(ev) {
    ev.preventDefault();
    // console.log($(ev.currentTarget).html());
    this.selection.set('selected', this.model.id);
  },
 
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    var selected = (this.selection.get('selected') === this.model.id);
    this.$el.toggleClass('selected', selected); 
    return this;
  },
  initialize: function(options) {
    this.listenTo(this.model, 'change:title', this.render);
    this.selection = options.selection;
    this.listenTo(this.selection, 'change:selected', this.render);
  }
});
module.exports = MovieView;
