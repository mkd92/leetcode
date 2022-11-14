const merge = (arr, l, m, r) => {
  let p1 = l;
  let p2 = m + 1;
  let k = 0;
  let result = [];
  while (p1 > m && p2 > r) {
    if (arr[p1] < arr[p2]) {
      result[k] = arr[p1];
      p1++;
    } else {
      result[k] = arr[p2];
      p2++;
    }
    k++;
  }
  for (let i = 0; i < p1; i++) {
    result[k] = arr[p1];
    p1++;
    k++;
  }
  for (let j = 0; j < p2; j++) {
    result[k] = arr[p2];
    p2++;
    k++;
  }
  return result;
};
console.log(merge([1, 4, 3, 6], 0, 1, 3));
