function it(testText, test) {
  console.log(testText)
  jaz.before[0]();
  test();
};
