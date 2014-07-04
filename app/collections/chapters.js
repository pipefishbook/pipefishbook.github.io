var Backbone = require('backbone');
Backbone.Firebase = require('./backbone_firebase');

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
