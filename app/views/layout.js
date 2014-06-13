var Backbone = require('backbone');
var _ = require('underscore');

var WelcomeView = require('views/welcome');
var ChapterView = require('views/chapter');
var ExamplesView = require('views/examples');
var ReferencesView = require('views/references');

var Layout = Backbone.View.extend({

  render: function() {
    this.$el.html(this.view.render().el);
    return this;
  },

  showChapter: function(id) {
    if (this.view) {
      this.view.remove();
    }
    this.view = new ChapterView({model: this.collection.get(id)});
    this.render();
  },

  showReferences: function() {
    if (this.view) {
      this.view.remove();
    }
    this.view = new ReferencesView();
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
    this.on('change:selected', _.bind(this.showChapter, this));
  }

});
module.exports = Layout;
