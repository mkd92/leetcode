const nums = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i - 1; j >= 0; j--) {
//     maxLeft = Math.max(maxLeft, nums[j]);
//   }
//   for (let k = i + 1; k < nums.length; k++) {
//     maxRight = Math.max(maxRight, nums[k]);
//   }

//   let tempSum = Math.min(maxLeft, maxRight) - nums[i];
//   if (tempSum > 0) water += tempSum;
// }
let water = 0;
let maxLeft = 0;
let maxRight = 0;
let p1 = 0;
let p2 = nums.length - 1;
let tempsum = 0;
while (p1 < p2) {
  if (nums[p1] < nums[p2]) {
    maxLeft = Math.max(maxLeft, nums[p1]);
    tempsum = maxLeft - nums[p1];
    if (tempsum > 0) {
      water += tempsum;
    }
    p1++;
  } else {
    maxRight = Math.max(maxRight, nums[p2]);
    tempsum = maxRight - nums[p2];
    if (tempsum > 0) {
      water += tempsum;
    }
    p2--;
  }
}
//   let tempSum = Math.min(maxLeft, maxRight) - nums[i];
//   if (tempSum > 0) water += tempSum;

//   p1++;
//   p2--;

console.log(water);
