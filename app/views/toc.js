var Backbone = require('backbone');

var tocTemplate = require('templates/toc.hbs');

var Toc = Backbone.View.extend({

  template: tocTemplate,

  className: 'toc',

  render: function() {
    this.$el.html(this.template({chapters: this.collection.toJSON() }));
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  }

});
module.exports = Toc;
