var Backbone = require('backbone');

var referencesTemplate = require('templates/references.hbs');

var References = Backbone.View.extend({

  template: referencesTemplate,

  render: function() {
    this.$el.html(this.template({references: this.collection.toJSON() }));
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  }

});
module.exports = References;
