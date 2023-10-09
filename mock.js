const arr = [3, 9, 5, 7, 4, 6, 2, 8]

function merge (l=0, mid=1, h=3) {
  console.log('merge: l:', l+1, 'mid:', mid+1, 'h:', h+1);
  for (let i = l; i <= mid; i++) {
    console.log(i+1);
    for (let j = mid+1; j <= h; j++) {
      console.log('>',j+1);
    }
  }
  console.log(arr);
}

merge();

// 1---3 == 1
// 2---3 == 3
// 2---4 == 4
// 2...2 == 2