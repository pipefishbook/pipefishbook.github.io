var backfire = require("client-backfire");
var Backbone = backfire.Backbone;

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
