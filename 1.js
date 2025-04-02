// const arr = new Array(3);
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr.push(5);

// const arr = [10, 30, 20];

// // const newArr = new Array(arr.length);
// const newArr = [];

// let j = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
//   //   j++;
// }

// console.log(arr);
// console.log(newArr);

// Best way to do reverse array

// const arr = [10, 30, 20, 50];
const arr = [30, 20, 50, 100, 200];

let i = 0;
let j = arr.length - 1;

while (i < j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log(i);
  console.log(j);
  i++;
  j--;
}

console.log(arr);
