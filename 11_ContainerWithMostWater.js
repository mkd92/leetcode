const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// let max = 0;
// for (let i = 0; i < height.length; i++) {
//   for (let j = 0; j < height.length; j++) {
//     let area = (j - i) * Math.min(height[i], height[j]);
//     max = Math.max(max, area);
//   }
// }

let max = 0;
let left = 0;
let right = height.length - 1;
let area = 0;
while (left < right) {
  area = Math.min(height[left], height[right]) * (right - left);
  if (height[left] < height[right]) {
    left++;
  } else {
    right--;
  }
  max = Math.max(max, area);
}
console.log(max);
