const nums = [1, 3, 4, 5, 7, 10, 11];
const target = 9;
let p1 = 0;
let p2 = nums.length - 1;
while (p1 < p2) {
  let sum = nums[p1] + nums[p2];
  if (sum > target) {
    p2--;
  } else if (sum < target) {
    p1++;
  }
  if (sum === target) {
    console.log([p1 + 1, p2 + 1]);
    break;
  }
}
