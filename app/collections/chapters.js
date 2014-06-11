var backfire = require("client-backfire");
var Backbone = backfire.Backbone;

var Chapter = Backbone.Model.extend({

  defaults: {
    'selected': false
  }

});

var Chapters = Backbone.Firebase.Collection.extend({

  firebase: 'https://pipefishbook.firebaseio.com/chapters',
  model: Chapter

});
module.exports = Chapters;
