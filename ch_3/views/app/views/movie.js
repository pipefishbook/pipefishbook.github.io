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
    console.log('event on ' + this.model.id);
    if (!this.model.get('selected')) {
      this.model.collection.resetSelected();
      this.model.collection.selectByID(this.model.id);
    }
  },
 
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },
  initialize: function() {
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
  }
});
module.exports = MovieView;
