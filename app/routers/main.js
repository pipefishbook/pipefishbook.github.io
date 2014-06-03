var Backbone = require('backbone');

var Navbar = require('views/navbar');
var Layout = require('views/layout');

var Main = Backbone.Router.extend({

  routes: {
    'toc': 'showTOC',
    'examples': 'showExamples',
    'references': 'showReferences',
    'chapters/:id': 'showChapter',
    'about': 'showAbout'
  },

  showTOC: function() {
    this.navbar.addToc();
  },

  showChapter: function(id) {
    this.navbar.removeToc();
    this.layout.showChapter(id);
  },

  showExamples: function() {
    this.navbar.removeToc();
    this.layout.showExamples();
  },

  showReferences: function() {

  },

  showAbout: function() {

  },

  initialize: function() {
    this.navbar = new Navbar({el: '#navbar'});
    this.navbar.render();
    this.layout = new Layout({el: '#main'});
  }


});
module.exports = Main;
