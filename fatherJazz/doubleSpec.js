console.log("----  DOUBLE TESTS ----")

testDouble = stuntDouble('double', ['length'], ['true'])

console.log('Equal if number 1 is in the array')
console.log(expect(testDouble.name).toEqual('double'))

console.log('Equal if number 1 is in the array')
console.log(expect(testDouble).toEqual( {name: 'double', length: 'true' } ))

console.log(testDouble)
