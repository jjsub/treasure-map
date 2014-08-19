/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Treasure    = require('../../app/models/treasure'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'template-test';

describe('Treasure', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Treasure object', function(){
      var t = {Name: 'Gold', Location:'NYC' , Photo: 'www.google.com' ,Difficulty: 'low', Hint:'Go north !'},
          gold = new Treasure(t);
      expect(gold).to.be.instanceof(Treasure);

    });
  });

  describe('.all', function(){
    it('should get all people', function(done){
      Treasure.all(function(err, people){
        expect(people).to.have.length(2);
        done();
      });
    });
  });
});

