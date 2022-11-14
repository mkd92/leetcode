let arr = [2, 3, 5, 4, 1];
let target = 3;
let temp;
// iterate
for (let i = 1; i < arr.length; i++) {
  temp = arr[i];
  if (arr[i] < arr[i - 1]) {
    for (let i = j; j >= 0; j--) {
      if (arr[j - 1] < arr[j]) {
        arr[j] = temp;
      } else {
      }
    }
  }
}
