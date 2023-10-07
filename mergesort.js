const arr = [9,3,7,5,6,4,8,2];

function merge(l, mid, h) {
  const arrayL = arr[l];
  const arrayMid = arr[mid];
  const arrayH = arr[h];
   if(l === mid) {
    if (arrayL < arrayH) return;
    arr[l] = arrayH;
    arr[h] = arrayL;
    return;
  } 
  
  console.log('merge: l:', l+1, 'mid:', mid+1, 'h:', h+1);
  for (let i = l; i <= mid; i++) {
    console.log(i+1);
    for (let j = mid+1; j <= h; j++) {
      console.log('>',j+1);
    }
  }
}

function mergeSort (l,h) {
  if (l < h) {
    const mid = parseInt((l+h)/2);
    mergeSort(l,mid);
    mergeSort(mid+1, h);
    merge(l,mid,h);
  } 
}

mergeSort(0,arr.length-1);
console.log(arr);