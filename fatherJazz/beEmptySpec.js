console.log("---- PROTOTYPE BEEMPTY TESTS ----")

console.log('It passes if nothing is in the array.')
console.log(expect(expect([]).toBeEmpty()).toEqual('Yes, it is empty'))

console.log('It passes if something is in the array.')
console.log(expect(expect([3]).toBeEmpty()).toEqual('No, it is not empty'))

console.log('It passes if multiple elements are in the array.')
console.log(expect(expect([1, 2, "3"]).toBeEmpty()).toEqual('No, it is not empty'))

console.log('It passes if an empty string is in the array.')
console.log(expect(expect(['']).toBeEmpty()).toEqual('No, it is not empty'))

console.log('It passes if an array is in the array.')
console.log(expect(expect([[3]]).toBeEmpty()).toEqual('No, it is not empty'))
