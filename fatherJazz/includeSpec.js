console.log("---- PROTOTYPE TOINCLUDE TESTS ----")
console.log('Passed if number 1 is in the array')
console.log(expect(expect([1,2,3]).toInclude(1)).toEqual('Yes, it is in the array.'))

console.log('Passed if number 1 is a string and is not in the array')
console.log(expect(expect([1,2,3]).toInclude("1")).toEqual('No, it is not in the array.'))

console.log('Passed if number 4 is not in the array')
console.log(expect(expect([1,2,3]).toInclude(4)).toEqual('No, it is not in the array.'))

console.log('Passed if it is a empty array')
console.log(expect(expect([]).toInclude('')).toEqual('No, it is not in the array.'))

console.log('Passed if an array is inside the array')
console.log(expect(expect([[1],[2],[3]]).toInclude([3])).toEqual('Yes, it is in the array.'))

console.log('Passed if an array is not in the array')
console.log(expect(expect([[1],[2],[3]]).toInclude([35])).toEqual('No, it is not in the array.'))

console.log('Passed if an array is inside the array')
console.log(expect(expect([[1],[2],[3]]).toInclude([3])).toEqual('Yes, it is in the array.'))


obj = new Object
obj2 = new Object

console.log('Passed if an array is inside the array')
console.log(expect(expect([obj]).toInclude(obj2)).toEqual('No, it is not in the array.'))
