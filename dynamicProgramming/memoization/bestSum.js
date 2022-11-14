const bestSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = null;
  for (let num of nums) {
    const rem = target - num;
    const remComb = bestSum(rem, nums, memo);
    if (remComb !== null) {
      const comb = [...remComb, num];
      if (shortest === null || comb.length < shortest.length) {
        shortest = comb;
      }
    }
  }
  memo[target] = shortest;
  return shortest;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
