'use strict';

var Mongo = require('mongdb');

function Treasure(t){
  this.name       = t.name;
  this.Location   ={lat:parseFloat(t.lat), lng:parseFloat(t.lng)};
  this.photo      = t.photo;
  this.difficulty = t.difficulty;
}

Object.defineProperty(Treasure, 'collection', {
  get: function(){return global.mongodb.collection('treasure');}
});

Treasure.create = function(t, cb){ // This function creat the new object in the db ( treasure )
  var t1 = new Treasure(t);
  Treasure.collection.save(t1, cb);
};

Treasure.all = function(cb){
  Treasure.collection.find().toArray(cb);
};

Treasure.findByld = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Treasure.collection.findOne({_id:_id}, function(err, treasure){
    cb(err,Treasure);
  });
};


module.exports = Treasure;

