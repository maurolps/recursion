const arr = [9,3,7,5,6,4,8,2];

function merge(l, mid, h) {
    const arrayL = arr[l];
    const arrayMid = arr[mid];
    const arrayH = arr[h];
    
    console.log('merge: l:', l, 'mid:', mid, 'h:', h);
    if(l === mid) {
       if (arrayL < arrayH) return;
      arr[l] = arrayH;
      arr[h] = arrayL;
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