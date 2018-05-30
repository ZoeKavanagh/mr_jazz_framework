it("returns 'Hello World!'", function(){
  var demo;
  demo = new Demo();
  expect(demo.sayHello()).toReturn('Hello World!');
});
