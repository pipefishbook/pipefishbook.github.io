var Backbone = require('backbone');

var welcomeTemplate = require('templates/welcome.hbs');

var Welcome = Backbone.View.extend({

  template: welcomeTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Welcome;
