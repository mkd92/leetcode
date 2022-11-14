let flowerbed = [0];
// let newFlowerbed = [0, ...flowerbed, 0];
let n = 1;
for (let i = 0; i < flowerbed.length; i++) {
  if (flowerbed.length == 1 && flowerbed[0] == 0) {
    flowerbed[i] = 1;
    n--;
  } else if (i == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
    flowerbed[i] = 1;
    n--;
  } else if (
    i == flowerbed.length - 1 &&
    flowerbed[i - 1] == 0 &&
    flowerbed[i] == 0
  ) {
    flowerbed[i] = 1;
    n--;
  } else if (
    flowerbed[i - 1] == 0 &&
    flowerbed[i] == 0 &&
    flowerbed[i + 1] == 0
  ) {
    flowerbed[i] = 1;
    n--;
  }
}

console.log(n <= 0);
