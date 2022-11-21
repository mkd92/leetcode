// function removeDuplicates(nums) {
//   let newNums = [];
//   let k = 0;
//   newNums.push(nums[0]);
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       newNums.push(nums[i]);
//       k++;
//     }
//   }
//   while(k<nums.length){
//     newNums.push("_")
//     k++
//   }
//   return newNums
// }
// but in leetcode i need to manipulate the same array
let nums = [1, 2, 2, 3];
function removeDuplicates(nums) {
  let p1 = 1;
  let p2 = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[p2] !== nums[p2 - 1]) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  for (let j = p1; j < nums.length; j++) {
    nums[j] = "_";
  }
  p1;
  p2;
  nums;
}

console.log(removeDuplicates(nums));
