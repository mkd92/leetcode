let nums = [-4, -1, 0, 3, 10];

let l = 0;
let r = nums.length - 1;
let i = 0;
let result = [];

while (r >= l) {
  console.log(l);
  console.log(r);
  let lSqr = nums[l] ** 2;
  console.log(lSqr);
  let rSqr = nums[r] ** 2;
  console.log(rSqr);
  result[nums.length - i - 1] = Math.max(lSqr, rSqr);
  if (lSqr > rSqr) l++;
  else if (rSqr >= lSqr) r--;
  i++;
}
console.log(result);
