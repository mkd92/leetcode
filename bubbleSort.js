const arr = [3,6,4,8,3,9]
var temp = 0

for(let i = 0; i < arr.length; i++){
    for(let j=0;j<arr.length-i; j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr)