// return fibonacci sequence using iterator
function fibs(input) {
  const fib = [0, 1];
  for (let i = 2; i < input; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  console.log(fib);
}
fibs(8); // [0, 1, 1, 2, 3, 5, 8, 13]

// return fibonacci sequense using recursive method
let n = 2;
const fib = [0, 1];
function fibsrec(input) {
  if (input < 3) return;
  fib[n] = fib[n - 2] + fib[n - 1];
  n++;
  fibsrec(input - 1);
  n--;
  if (n < 3) return fib;
}

console.log(fibsrec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
