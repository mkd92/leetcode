const howSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of nums) {
    const remainder = target - num;
    const val = howSum(remainder, nums, memo);
    if (val !== null) {
      memo[target] = [...val, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(7, [2, 3, 5]));
console.log(howSum(300, [100, 14]));
