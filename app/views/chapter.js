var Backbone = require('backbone');

var chapterTemplate = require('templates/chapter.hbs');

var Chapter = Backbone.View.extend({

  template: chapterTemplate,

  render: function() {
    this.$el.html(this.template({id: this.id}));
    return this;
  },

  initialize: function(options) {
    this.id = options.id;
  }

});
module.exports = Chapter;
