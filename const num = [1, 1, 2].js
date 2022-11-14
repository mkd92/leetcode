const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = 1;
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == nums[j + 1]) {
      nums[j + 1] = nums[j + 2];
    }
  }
}
console.log(nums);
