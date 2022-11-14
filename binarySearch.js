const nums = [1, 3];
const target = 1;

// // while()
// while (l < r) {
//   console.log(l, r, m);
//   m = Math.ceil((r + l) / 2);
//   if (arr[m] == target) {
//     result = m;
//     break;
//   }
//   if (arr[m] > arr[l]) {
//     // compare with left part is sorted
//     if (arr[l] <= target && target <= arr[m]) {
//       r = m - 1;
//     } else {
//       l = m + 1;
//     }
//   } else {
//     if (arr[m] <= target && target <= arr[r]) {
//       l = m + 1;
//     } else {
//       r = m - 1;
//     }
//   }
// }
// break;
// if (target < arr[m]) {
//   r = m;
// } else if (target > arr[m]) {
//   l = m;
// } else {
//   result = m;
//   break;
// }
//   m = Math.floor((l + r) / 2)
function searchOnRotatedArray(nums, ele) {
  let l = 0;
  let h = nums.length - 1;
  while (l <= h) {
    let m = l + (h - l) / 2;
    if (nums[m] === ele) {
      return m;
    }
    if (nums[l] < nums[m]) {
      // left side is sorted
      if (ele >= nums[l] && ele < nums[m]) {
        h = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      // right side is sorted
      if (ele >= nums[m] && ele < nums[h]) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
  }
  return -1;
}
console.log(result);
