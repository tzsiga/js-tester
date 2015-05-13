var client = require('./client');
var assert = require('chai').assert;

describe('Aritmetics Integration Tests', function (){

  beforeEach(function (done){
    client.init().url('http://localhost:3000', done);
  });

  it('Add 10 + 10 = 20', function (done){
    client.setValue("#op1", "10")
      .setValue("#op2", "10")
      .selectByValue("#operand", "add")
      .click("#run")
      .getValue("#res")
      .then(function (value){
        assert.equal(value, "20");
        assert.notEqual(value, "30");
        done();
    }).end();
  });
});