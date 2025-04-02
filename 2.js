// move possitive num one side and negative num another side

const arr = [10, -1, 1, -20, 300, -15];
let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] > 0) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    j++;
  }
  i++;
}
console.log(arr);
