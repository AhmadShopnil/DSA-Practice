// array item rotation by 1 step

const arr=[1,2,3,4,5]
const c=arr[arr.length-1]

for(let i=arr.length-1; i>0;i--){
    // console.log(i);
arr[i]=arr[i-1]
}
arr[0]=c
console.log(arr);