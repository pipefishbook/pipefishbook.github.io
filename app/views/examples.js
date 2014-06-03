var Backbone = require('backbone');

var examplesTemplate = require('templates/examples.hbs');

var Examples = Backbone.View.extend({

  template: examplesTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Examples;
