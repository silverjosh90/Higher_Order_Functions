
exports.mapped = Array.prototype.mapped = function(callback) {
  var arr = []
  for (var i = 0; i < this.length; i++) {
    var val = this[i]
    var index = i
    arr[index] = callback(val, index)
  }
  return arr
}

exports.filter = Array.prototype.filtered =
function(callback){
  var arr = []
  for (var i = 0; i < this.length; i++) {
    var val = this[i]
    var index = i
    var j =  callback(val, index)
    if (j) {
      arr.push(val)
    }
  }
  return arr
}
