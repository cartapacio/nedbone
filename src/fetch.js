(function () {
  module.exports = function(Backbone, db) {

    Backbone.Collection.prototype.fetch = function(){
      var doctype = this.doctype
      var collection = this
      db.find({type: doctype}, function(err,doc){
          if(!err){
              collection['reset'](doc)
              collection.trigger('sync', collection)
          }
      })
    }
    return Backbone
  }

}).call(this)