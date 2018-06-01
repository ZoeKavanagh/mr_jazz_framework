console.log("----  DOCUMENT METHOD TESTS ----")

// documentDouble = stuntDouble('document', ['documentElement.innerHTML'], ['hello mother earth'])
console.log("Equal if hello is in document")
console.log(document.documentElement.innerHTML)


cool = hasContent('Open')
console.log(cool);

console.log(expect(hasContent('Open')).toEqual('content appears in document'))
