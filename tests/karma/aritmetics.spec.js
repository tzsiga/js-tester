describe('Aritmetics', function(){

	var aritmetics = null;

	var tree = document.createElement('div');

	before(function(){
		aritmetics = new components.Aritmetics();
	});

	after(function(){
		aritmetics = null;
	});

	describe('#add', function(){
		it('add(5,5) equal 10', function(){
			var r = aritmetics.add(5,5);
			assert.equal(r,10);
		});
	});

	describe('#sub', function(){
		it('sub(5,5) equal 0', function(){
			var r = aritmetics.sub(5,5);
			assert.equal(r,0);	
		});
	});

	describe('#mul', function(){
		it('mul(5,5) equal 25', function(){
			var r = aritmetics.mul(5,5);
			assert.equal(r,25);	
		});
	});

	describe('#div', function(){
		it('div(5,5) equal 1', function(){
			var r = aritmetics.div(5,5);
			assert.equal(r,1);	
		});
	});

	describe('#render', function(){
		it('render Add', function(){
			aritmetics.add(5,5);
			aritmetics.render(tree);
			assert.equal(tree.innerHTML,'Add');
		});
	});
});