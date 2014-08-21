'use strict';

var Treasure = require('../models/treasure');

exports.init = function(req, res){
  res.render('treasures/init');
};

exports.create = function(req, res){
  Treasure.create(req.body, function(){ //req.body take all the data pass into the new create object and the take it all and pass it
    res.redirect('/treasures'); //redirect take req.body and redirected to ( )
  });
};

exports.index = function(req, res){
  Treasure.all(function(err, treasures){
    res.render('treasures/index', {treasures:treasures});
  });
};

exports.find = function(req, res){
  Treasure.findById(req.params.id, function(treasure){// this parameter can be call what ever we want
    treasure.toggle(function(){
      console.log(treasure);
      res.redirect('/treasures');
    });
  });
};

exports.show = function(req, res){
  Treasure.findById(req.params.id, function(treasure){
    console.log('-------', treasure);
    res.render('treasures/show', {treasure:treasure});
  });
};

//What kind of controller I should make for the index to the show page
