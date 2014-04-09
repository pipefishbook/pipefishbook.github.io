var _ = require('underscore');
var Backbone = require('backbone');

  var Monitor = function(collection) {
    _.extend(this, Backbone.Events);
    this.listenTo(collection, 'all', function (eventName) { 
      console.log(eventName);
    });
  }
  module.exports = Monitor;
