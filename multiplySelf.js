const arr = [1,2,3,4]

let result = []
// let product = 1
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(i!==j){
//             product = product * arr[j]
//         }
//     }
//     result[i] = product
//     product = 1
// }
result[0] = 1
let prefix = 1
for (let i = 1; i < arr.length; i++) {
prefix  = prefix*arr[i-1]
result[i]=prefix
}
let postfix = 1
for (let j = arr.length-1; j >=1; j--) {
    postfix  = postfix*arr[j]
    result[j-1]=postfix
}

// [24,12,8,6]
console.log(result)