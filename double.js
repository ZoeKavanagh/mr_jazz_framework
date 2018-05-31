function stuntDouble (name, arrayMethod, resultArray) {
  double = {}
  double.name = name
  var i = 0
  arrayMethod.forEach(function(method, i){
    double[method] = function() {return resultArray[i-1] }
    i++
  })
  return double;

}
var hello = stuntDouble("plane", ["hi","bye","pie","lie"], ["hi","bye","pie","lie"] )
console.log(hello.hi())
console.log(hello.bye())
console.log(hello.pie())
console.log(hello.lie())
