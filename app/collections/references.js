var Backbone = require('backbone');
Backbone.Firebase = require('./backbone_firebase');

var Reference = Backbone.Model.extend({

  defaults: {
    'selected': false
  }

});

var References = Backbone.Firebase.Collection.extend({

  firebase: 'https://pipefishbook.firebaseio.com/references',
  model: Reference

});
module.exports = References;
