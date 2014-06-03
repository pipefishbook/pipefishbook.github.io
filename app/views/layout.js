var Backbone = require('backbone');

var WelcomeView = require('views/welcome');
var ChapterView = require('views/chapter');
var ExamplesView = require('views/examples');

var Layout = Backbone.View.extend({

  render: function() {
    this.$el.html(this.view.render().el);
    return this;
  },

  showChapter: function(id) {
    if (this.view) {
      this.view.remove();
    }
    this.view = new ChapterView({id: id});
    this.render();
  },

  showExamples: function() {
    if (this.view) {
      this.view.remove();
    }
    this.view = new ExamplesView();
    this.render();
  },

  initialize: function() {
    this.view = new WelcomeView();
  }

});
module.exports = Layout;
