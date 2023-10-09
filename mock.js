const arr = [3, 9, 5, 7]

function merge (l=0, mid=1, h=3) {
  console.log('merge: l:', l+1, 'mid:', mid+1, 'h:', h+1);
  let j = mid+1;
  for (let i = l; i <= h; i++) {
    console.log('i: ', i, 'j:', j);
    if (j > h) {
      for (let k = i; k <= mid; k++) {
        console.log ('rest: ', k)
      }
      break;
    }

    if (arr[i] < arr[j]) {
      console.log(arr[i],' < ',arr[j] ,i, '---', j, '==', i);
    } else {
      console.log(arr[i],' > ',arr[j] ,i, '---', j, '==', j);
      i--;
      j++;
    }

  }
  console.log(arr);
}

merge(); // expected output: [3,5,7,9]
