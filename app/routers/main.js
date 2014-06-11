var Backbone = require('backbone');

var Navbar = require('views/navbar');
var Layout = require('views/layout');

var Chapters = require('collections/chapters');
var chapters = new Chapters();
chapters.on('add', function(e) {
  console.log(chapters.toJSON());
});

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
    this.layout.trigger('change:selected', id);
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
    this.navbar = new Navbar({el: '#navbar', collection: chapters});
    this.navbar.render();
    this.layout = new Layout({el: '#main', collection: chapters});
  }


});
module.exports = Main;
