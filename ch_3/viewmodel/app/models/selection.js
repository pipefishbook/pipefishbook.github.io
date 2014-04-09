var Backbone = require('backbone');

var Selection = Backbone.Model.extend({
  defaults: {
    'selected': 1
  }
});

module.exports = Selection;

