//  this gives us O(n^2) time complexity and O(n) space complexity
// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };
// we are trying to use memoization to reduce the TC
//  we are using JS Objects from memoization
// the memoization creates a function with TC O(n) and SC O(n)
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
