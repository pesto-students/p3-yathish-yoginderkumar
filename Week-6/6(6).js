function threeSum(arr, target) {
  arr.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let first = i + 1,
      second = arr.length - 1;
    while (first < second) {
      let sum = arr[i] + arr[first] + arr[second];
      if (Math.abs(1 * target - sum) < Math.abs(1 * target - closestSum)) {
        closestSum = sum;
      }
      if (sum > target) {
        second--;
      } else {
        first++;
      }
    }
  }
  return closestSum;
}

console.log(threeSum([-1, 2, 1, -4], 1));
