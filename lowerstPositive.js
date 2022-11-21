let arr = [100,-2,3,4]

for (let i =0;i<arr.length;i++){
if(arr[i]<0){
    arr[i] = 0
}
}
for(let i =0;i<arr.length;i++){
    // console.log(arr[i]>0&&arr[i]<=(arr.length+1))
    if(arr[i]>0&&arr[i]<=(arr.lenght+1)){
        arr[arr[i]]= arr[i] * -1
        console.log(first)
    }
}

console.log(arr)