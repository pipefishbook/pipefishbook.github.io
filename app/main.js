var $ = require('jquery-untouched');
var backfire = require("client-backfire");
var Backbone = backfire.Backbone;
Backbone.$ = $;


$(document).ready(function() {
  var Router = require('routers/main');
  var router = new Router();
  Backbone.history.start();
});

