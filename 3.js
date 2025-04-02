// array item rotation by 1 step

const arr=[1,2,3,4,5]
const c=arr[0]
for(let i=0; i<arr.length-1;i++){
    // console.log(i);
arr[i]=arr[i+1]
}
arr[arr.length-1]=c
console.log(arr);







