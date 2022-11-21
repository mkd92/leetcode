let arr = [1,2,3]
let k=3
let sum = 0
let mem = {0:1}
let complement = 0  
for(let i=0;i<arr.length;i++){
    let sub = 0
mem[sub+arr[i]]=mem[sub+arr[i]]?mem[sub+arr[i]]+1:1
sum = sum+arr[i]
complement = sum-k
count = mem[complement]?count+mem[complement]:count
}
console.log(count)

console.log(mem)
