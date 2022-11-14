const nums = [1, 1, 2, 2, 2];
let k = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == nums[i + 1] && i < nums.length - 1) {
    k++;
  }
  if (nums[i] != nums[i + 1] && i < nums.length - 1) {
    nums[k] = nums[i + 1];
  }
}
console.log(nums, k);
