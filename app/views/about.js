var Backbone = require('backbone');

var aboutTemplate = require('templates/about.hbs');

var About = Backbone.View.extend({

  template: aboutTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = About;
