function pairExist(arr, diff) {
  let map = new Map();
  let pairCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }

    if (diff === 0 && map.get(arr[i] > 1)) {
      console.log([arr[i], arr[i]]);
      return true;
    }
  }

  if (diff === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(diff + arr[i])) pairCount++;
  }

  return pairCount;
}

console.log(pairExist([5, 10, 3, 2, 50, 80], 78));
