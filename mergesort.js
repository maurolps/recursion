const newArr = []

function merge(arr, l, mid, h) {
  const arrayL = arr[l];
  const arrayH = arr[h];
   if(l === mid) {
    if (arrayL < arrayH) return;
    arr[l] = arrayH;
    arr[h] = arrayL;
    newArr[l] = arrayH;
    newArr[h] = arrayL;
    return;
  } 
  
  let j = mid+1;
  let index = l;
  const bkArr = [...newArr];

  for (let i = l; i <= h; i++) {
    if (j > h) {
      for (let k = i; k <= mid; k++) {
        newArr[index] = bkArr[k];
        index++
      }
      break;
    }

    if (i > mid) {
      for (let k = j; k <= h; k++) {
        newArr[index] = bkArr[k];
        index++;
      }
      break;
    }

    if (bkArr[i] < bkArr[j]) {
      newArr[index] = bkArr[i];
    } else {
      newArr[index] = bkArr[j];
      i--;
      j++;
    }
   index++ 
  }
}

function mergeSort (arr, l = 0, h = null) {
  if (h === null) h = arr.length-1;
  if (l < h) {
    const mid = parseInt((l+h)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, h);
    merge(arr, l, mid, h);
    console.log('saida1');
  } 
  console.log('saida2');
}

const arr = [9,3,7,5,6,4,8,2];

mergeSort(arr);
console.log(newArr); // [2, 3, 4, 5, 6, 7, 8, 9]