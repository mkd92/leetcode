const nums = [-1, 0, 1, 2, -1, -4];
const threeSum = (arr) => {
  let result = [];
  arr.sort((a, b) => a - b);
  //   iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // if is greater than 0 & arr[i] is equal to arr[i-1] skip
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    // initiate pointers
    let l = i + 1;
    let r = arr.length - 1;
    // while l < r
    while (l < r) {
      let threeSum = arr[i] + arr[l] + arr[r];
      if (threeSum > 0) r--;
      else if (threeSum < 0) l++;
      else {
        result.push([arr[i], arr[l], arr[r]]);
        l++;
        while (arr[l] === arr[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum(nums));
