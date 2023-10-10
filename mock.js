// This function is exclusively intended for temporary debugging purposes.
// It will be implemented within the mergeSort function, located in mergesort.js

const arr = [3, 9, 5, 7];

function merge(l = 0, mid = 1, h = 3) {
  const newArr = [];
  let j = mid + 1;
  let index = 0;
  for (let i = l; i <= h; i++) {
    if (j > h) {
      for (let k = i; k <= mid; k++) {
        newArr[index] = arr[k];
        index++;
      }
      break;
    }

    if (arr[i] < arr[j]) {
      newArr[index] = arr[i];
    } else {
      newArr[index] = arr[j];
      i--;
      j++;
    }
    index++;
  }
  console.log('input: ', arr);
  console.log('output:', newArr);
}

merge(); // expected output: [3,5,7,9]
