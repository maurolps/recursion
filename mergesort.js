const arr = [9,3,7,5,6,4,8,2];
let quitCount = 0;
let quits = 0;

console.log('init...');

function mergeSort (l,h) {
    console.log('incomming:','l:',l, 'h:',h);
  if (l < h) {
    const mid = parseInt((l+h)/2);
    quitCount++
    mergeSort(l,mid);
    quits++;
    console.log('return1:','l:',l, 'mid:',mid, 'h:',h);
    quitCount++
    mergeSort(mid+1, h);
    quits++;
    console.log('return2:','l:',l, 'mid:',mid, 'h:',h);
    
  } else {
    console.log('quit: ', quits, '/',quitCount);
  }
}

mergeSort(1,arr.length);

console.log("end...");