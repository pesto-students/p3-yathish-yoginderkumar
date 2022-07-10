const Fib = (n) => ({
  [Symbol.iterator]() {
    let i = 1;
    let old = 0;
    let nextVal = 0;
    return {
      next() {
        if (i++ <= n) {
          [old, nextVal] = [nextVal, old + nextVal || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

console.log([...Fib(10)]);
