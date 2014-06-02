var Backbone = require('backbone');

var layoutTemplate = require('templates/layout.hbs');

var Layout = Backbone.View.extend({

  template: layoutTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Layout;
