'use strict';

var Mongo = require('mongodb');

function Treasure(t){
  this.name       = t.name;
  this.Location1   =t.loc;   //{lat:parseFloat(t.lat), lng:parseFloat(t.lng)};
  this.photo      = t.photo;
  this.diff       = t.dificulty;
  this.hint       = t.hint;
  this.find       = false;
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

Treasure.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Treasure.collection.findOne({_id:_id}, function(err, treasure){
    console.log('>>>>>>>', treasure);
    cb(treasure);
  });
};

Treasure.prototype.toggle = function(cb){//prototyping a fuction that will make the find false declaration go the contrario (true) by  asingning !
  this.find = !this.find;
  Treasure.collection.save(this, cb);
};

module.exports = Treasure;

