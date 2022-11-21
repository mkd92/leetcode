function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let leftArr = array.slice(0, mid);
  let rightArr = array.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let index = 0;
  let resArr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      resArr[index] = arr1[p1];
      p1++;
    } else {
      resArr[index] = arr2[p2];
      p2++;
    }
    index++;
  }
  for (let i = p1; i < arr1.length; i++) {
    resArr[index] = arr1[j];
    index++;
  }
  for (let j = p2; j < arr2.length; j++) {
    resArr[index] = arr2[j];
    index++;
  }
  return resArr;
}
console.log(mergeSort([2, 4, 6, 2, 5, 3, 8]));
