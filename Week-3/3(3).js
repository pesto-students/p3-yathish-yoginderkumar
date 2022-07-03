function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // Will log 'Count is 0'

// Why?
// Because we've declared 'message' out of "log()" function so, when message declared  it has value of count as '0' every time it is going to give 'Count is 0'
