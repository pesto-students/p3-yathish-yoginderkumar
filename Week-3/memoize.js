function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) return cache.get(key);
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function fibonacciNum(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciNum(n - 1) + fibonacciNum(n - 2);
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const fibonacciNumMemoized = memoize(fibonacciNum);
time(() => fibonacciNumMemoized(37));
time(() => fibonacciNumMemoized(38));
time(() => fibonacciNumMemoized(38));
time(() => fibonacciNumMemoized(37));
