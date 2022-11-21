let arr = [9, 2, 6, 4, 3, 5, 1];

function quicksort(nums, left, right) {
  if (left >= right) return;
  let p = nums[Math.floor((left + right) / 2)];
  let index = partition(nums, left, right, p);
  quicksort(nums, left, index - 1);
  quicksort(nums, index, right);
}
function partition(array, left, right, pivot) {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++, right--;
    }
  }
  return left;
}

quicksort(arr, 0, arr.length - 1);
console.log(arr);
