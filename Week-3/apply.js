var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max); // will return maximum in the array supplied

var numbers = [5, 6, 2, 3, 7];
var min = Math.min.apply(null, numbers);
console.log(min); // will return minimum in the array supplied

// The "apply()" method calls a function with a given this value,
// and arguments provided as an array (or an array like obj)
