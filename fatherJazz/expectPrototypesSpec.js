// Test that toEqual works
console.log("---- PROTOTYPE TESTS ----")

console.log("Returns true if to values are same and same type")
console.log(isTrue(expect(1).toEqual(1) === "PASSED"))

console.log("Returns true if values are different")
console.log(isTrue(expect(1).toEqual(2) === "FAILED"))

console.log("Returns true if arrays are the same")
console.log(isTrue(expect([1,"2",3]).toEqual([1,2,3]) === "PASSED"))

console.log("Returns true if arrays are different")
console.log(isTrue(expect([1,2,4]).toEqual([1,2,3]) === "FAILED"))

console.log("Returns true if values are different type")
console.log(isTrue(expect("1").toEqual(1) === "FAILED"))

console.log("Returns true if hashes are the same")
console.log(isTrue(expect({1: "2", 3: 4}).toEqual({1: 2, 3: 4}) === "PASSED"))

console.log("Returns true if hashes are the same but have different type of values")
console.log(isTrue(expect([1, 2, 3, 4])._arrayComparison([1, 2, 3, 4]) === "FAILED"))

console.log(typeof{1: 2})
