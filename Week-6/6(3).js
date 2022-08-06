function sortNumbers(nums) {
  let start = 0;
  let mid = 0;
  let end = nums.length - 1;
  while (mid <= end) {
    if (nums[mid] === 0) {
      nums[start] = nums[start] + nums[mid];
      nums[mid] = nums[start] - nums[mid];
      nums[start] = nums[start] - nums[mid];
      start++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      if (mid === end) {
        nums[end] = nums[mid];
      } else {
        nums[mid] = nums[mid] + nums[end];
        nums[end] = nums[mid] - nums[end];
        nums[mid] = nums[mid] - nums[end];
      }
      end--;
    }
  }
  return nums;
}

console.log(sortNumbers([01]));
