const arr = [3,6,4,8,3,9]
let temp = 0
let maxIndex = 0
for(let i = 0; i < arr.length; i++){
    for(let j=1;j<arr.length-i; j++){
        if(arr[j-1]<arr[j]){
            maxIndex = j
        }else{
            maxIndex = j-1
        }
       

    }
    temp = arr[maxIndex]
    arr[maxIndex] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
}

console.log(arr)