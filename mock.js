
// This function is exclusively intended for temporary debugging purposes.
// It will be implemented within the mergeSort function, located in mergesort.js

const arr = [3, 9, 5, 7]

function merge (l=0, mid=1, h=3) {
  const newArr = [];
  // console.log('merge: l:', l+1, 'mid:', mid+1, 'h:', h+1);
  let j = mid+1;
  let index = 0;
  for (let i = l; i <= h; i++) {
    // console.log('i: ', i, 'j:', j);
    if (j > h) {
      for (let k = i; k <= mid; k++) {
        // console.log('index: ',index);
        // console.log ('rest: ', k)
        newArr[index] = arr[k];
        index++
      }
      break;
    }

    if (arr[i] < arr[j]) {
      // console.log(arr[i],' < ',arr[j] ,i, '---', j, '==', i);
      newArr[index] = arr[i];

    } else {
      // console.log(arr[i],' > ',arr[j] ,i, '---', j, '==', j);
      newArr[index] = arr[j];
      i--;
      j++;
    }
  //  console.log('index: ', index);
   index++ 
  }
  console.log('input: ', arr);
  console.log('output:', newArr);
}

merge(); // expected output: [3,5,7,9]
