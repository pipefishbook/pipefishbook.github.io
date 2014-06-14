var Backbone = require('backbone');

var navbarTemplate = require('templates/navbar.hbs');
var tocTemplate = require('templates/toc.hbs');

var Toc = require('views/toc');

var active = false;

var Navbar = Backbone.View.extend({

  events: {
    'click a[href="#toc"]': 'toggleToc'
  },

  template: navbarTemplate,

  toggleToc: function(e) {
    active = !active;

    var that = this;
    if (active) {
      that.removeToc();
    } else {
      that.addToc();
    }
  },

  render: function() {
    this.$el.html(this.template());
    var that = this;
    if (this.toc) {
      that.$el.append(that.toc.render().el);
    }
    return this;
  },

  addToc: function() {
    this.toc = new Toc({collection: this.collection});
    this.render();
  },

  removeToc: function() {
    var that = this;
    if (this.toc) {
      that.toc.remove();
    }
    this.toc = null;
    this.render();
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  }

});
module.exports = Navbar;
