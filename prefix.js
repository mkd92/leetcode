const prefix = (arr) => {
  let p1 = 1;
  while (p1 < arr.length) {
    arr[p1] = arr[p1] + arr[p1 - 1];
    p1++;
  }
  return arr;
};

console.log(prefix([-1, -4, 5, 7]));

const suffix = (arr) => {
  let p1 = arr.length - 1;
  while (p1 >= 1) {
    arr[p1 - 1] = arr[p1] + arr[p1 - 1];
    p1--;
  }
  return arr;
};

console.log(suffix([-1, -4, 5, 7]));
