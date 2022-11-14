const bestSum = (target, nums) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (i = 0; i <= target; i++) {
    if (table[i] != null) {
      for (num of nums) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[target];
  //   console.log(table);
  //   return table;
};

console.log(bestSum(7, [2, 3, 5]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(300, [1, 2, 5, 25, 100]));
