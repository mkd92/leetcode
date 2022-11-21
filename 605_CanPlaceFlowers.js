const flowerbed = [1, 0, 0, 0, 1];
const n = 1;

let num = n;
for (let i = 0; i < flowerbed.length; i++) {
  const ele = flowerbed[i];
  const eleBefore = flowerbed[i - 1];
  const eleAfter = flowerbed[i + 1];
  console.log(flowerbed);
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    num--;
  }
  if (i === 0 && ele === 0 && eleAfter === 0) {
    flowerbed[i] = 1;
    num--;
  }
  if (i === flowerbed.length - 1 && ele === 0 && eleBefore === 0) {
    flowerbed[i] = 1;
    num--;
  }
  if (ele === 0 && eleAfter === 0 && eleBefore === 0) {
    flowerbed[i] = 1;
    num--;
  }
}
console.log(num <= 0);
flowerbed;
num;
