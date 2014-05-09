(function() {
  module.exports = function(Backbone, db) {
    var sync = require('./sync')(Backbone,db),
      fetch = require('./fetch')(Backbone,db)
  }
}).call(this);
