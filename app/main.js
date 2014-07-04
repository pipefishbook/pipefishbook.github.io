var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;


$(document).ready(function() {
  var Router = require('routers/main');
  var router = new Router();
  Backbone.history.start();
});

