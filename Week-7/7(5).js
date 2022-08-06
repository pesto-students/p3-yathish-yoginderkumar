function printNextGreaterElement(arr, n) {
  let next, i, j;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    console.log(next);
  }
}

printNextGreaterElement([6, 8, 0, 1, 3], 5);
