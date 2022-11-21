const nums = [-4, -3, -2, -1];
let l = 0;
let r = nums.length - 1;
let res = [];
let index = r;
for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i] ** 2;
}
nums;
while (r > l) {
  if (nums[l] > nums[r]) {
    res[index] = nums[l];
    l++;
  } else {
    res[index] = nums[r];
    r--;
  }
  index--;
}
res[index] = nums[r];
res;
