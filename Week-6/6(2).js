function spiralOrderMatrix(arr) {
  const newArr = new Array();
  if (arr.length === 0) {
    return newArr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr[i].forEach((item) => newArr.push(item));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(spiralOrderMatrix([0, [1, 2, 3], [4, 5, 6], [7, 8, 9, 10]]));
