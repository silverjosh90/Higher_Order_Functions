var expect = require('chai').expect
var Promuse = require('../promise')

describe('#promise', function(){
	it('has a .then method', function(){
	  var promise =  new Promuse
		expect(promise.then()).to.be.True
	})
	it('calls a function immediately', function(){
		var promise =  new Promuse(function(){
			return 'herp'
		})
		expect(promise()).to.equal('herp')


		})
	})

})
