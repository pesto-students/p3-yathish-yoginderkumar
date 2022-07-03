var module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

var fn = module.getX;
console.log(fn()); // Will return undefined

var boundedX = module.getX.bind(module);
console.log(boundedX()); // Will return 42 because we've bounded module with the getX function

// The "Bind" method creates a new function that,
// when called, has its "this" keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.
