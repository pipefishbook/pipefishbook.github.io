var Backbone = require('backbone');

var Navbar = require('views/navbar');
var Layout = require('views/layout');

var Main = Backbone.Router.extend({

  routes: {
    'toc': 'showTOC',
    'examples': 'showExamples',
    'references': 'showReferences',
    'chapters': 'showChapter',
    'about': 'showAbout'
  },

  showTOC: function() {
    this.navbar.addToc();
    this.navbar.render();
  },

  showChapter: function(id) {

  },

  showExamples: function() {
    this.navbar.removeToc();
    this.navbar.render();
    this.layout.render();
  },

  showReferences: function() {

  },

  showAbout: function() {

  },

  initialize: function() {
    this.navbar = new Navbar({el: '#navbar'});
    this.navbar.render();
    this.layout = new Layout({el: '#container'});
  }


});
module.exports = Main;
