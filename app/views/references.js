var Backbone = require('backbone');

var referencesTemplate = require('templates/references.hbs');

var References = Backbone.View.extend({

  template: referencesTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = References;
