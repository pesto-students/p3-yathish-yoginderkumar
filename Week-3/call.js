function greet() {
  var reply = [
    this.animal,
    "typically sleeps between",
    this.sleepDuration,
  ].join(" ");
  console.log(reply);
}

var cats = {
  animal: "cats",
  sleepDuration: "12 to 16 hours",
};

var dogs = {
  animal: "dogs",
  sleepDuration: "2 to 5 hours",
};

greet.call(cats);
greet.call(dogs);

// The "call()" method calls a function with a given 'this' value
// and arguments provided individually
