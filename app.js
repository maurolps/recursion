function fibs(input) {
  const fib = [0,1];
  for (let i = 2; i < input; i++) {
    fib[i] = fib[i-2]+fib[i-1];
  }
  console.log(fib);
}
fibs (8) // [0, 1, 1, 2, 3, 5, 8, 13]


