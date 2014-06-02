var Backbone = require('backbone');

var tocTemplate = require('templates/toc.hbs');

var Toc = Backbone.View.extend({

  template: tocTemplate,

  className: 'toc',

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Toc;
