function maxSumContiguousArr(arr) {
  let maxSum = -Infinity;
  let lastMaxSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    lastMaxSum = lastMaxSum + arr[i];
    if (maxSum < lastMaxSum) {
      maxSum = lastMaxSum;
    }
    if (lastMaxSum < 0) {
      lastMaxSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSumContiguousArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
