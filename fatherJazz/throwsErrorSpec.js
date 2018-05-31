console.log("---- PROTOTYPE THROWSERROR TESTS ----")

console.log('It passes when given a specific error')
console.log(expect(expect({throw 'error'}).throwsError('error')).toEqual('This is the correct error'))
