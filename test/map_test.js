var expect = require('chai').expect
var mapped = require('../map')

describe('#mapped', function(){
	it('returns an array', function(){
    var arr = []
	  expect(arr.mapped()).to.be.instanceOf(Array)
	})
  it('first input represents the value', function(){
    var newArray = [1,3,4,5]
    newArray = newArray.mapped(function(val, index){
      return val + 1
    })
    expect(newArray).to.deep.equal([2,4,5,6])
  })
  it('second value represents the index', function(){
    var arr = [1,4,5,6,7,7,8]
    var arr = arr.mapped(function(val,index){
      return index
    })
    expect(arr).to.deep.equal([0,1,2,3,4,5,6])
  })

  it('Does not manipulate the original array', function(){
    var arr = [1,3,4,5]
    arr.mapped(function(val,index){
      return val + 1
    })
  	expect(arr).to.deep.equal([1,3,4,5])

  })
  it('Does not require both parameters', function(){
    var arr = [1,4,5,6]
    var arr = arr.mapped(function(val){
      return val + 5
    })
  	expect(arr).to.deep.equal([6,9,10,11])

  })

})
describe('#filter', function(){
	it('returns an array', function(){
    var arr = []
    newarr = arr.filtered(function(val, index){
      return []
    })
	  expect(newarr).to.deep.equal([])
	})
  it('returns value if it satisfies callback', function(){
    var arr = [1,4,5,6,7]
    var newArr = arr.filtered(function(val,index){
      return val == 4
    })
  	expect(newArr).to.deep.equal([4])

  })
  it('returns blank array if all values are false', function(){
    var arr = [1,4,5,6,7]
    var newArr = arr.filtered(function(val,index){
      return val == 100
    })
  	expect(newArr).to.deep.equal([])
  })
  it('works with indexes', function(){
    var arr = [1,4,5,6,7]
    var newArr = arr.filtered(function(val,index){
      return index == 1
    })
  	expect(newArr).to.deep.equal([4])
  })

})
