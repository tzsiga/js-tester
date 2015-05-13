var assert = require('chai').assert;
var Aritmetics = require('../../src/aritmetics');

suite('Aritmetics',function(){

	var aritmetics = null;

	setup(function(){
		aritmetics = new Aritmetics();
	});

	teardown(function(){
		aritmetics = null;
	});

	test('#add', function(){
		var r = aritmetics.add(5,5);
		assert.equal(r,10);
	});

	test('#sub', function(){
		var r = aritmetics.sub(5,5);
		assert.equal(r,0);
	});

	test('#mul', function(){
		var r = aritmetics.mul(5,5);
		assert.equal(r,25);
	});

	test('#div', function(){
		var r = aritmetics.div(5,5);
		assert.equal(r,1);
	});
});