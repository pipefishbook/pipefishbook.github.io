var Backbone = require('backbone');

var chapterTemplate = require('templates/chapter.hbs');

var Chapter = Backbone.View.extend({

  template: chapterTemplate,

  render: function() {
    if (!this.model) {
      return;
    }
    var template = this.template(this.model.toJSON());
    this.$el.html(template);
    return this;
  },

  initialize: function(options) {
    this.id = options.id;
    this.model = options.model;
  }

});
module.exports = Chapter;
