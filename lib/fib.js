
// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:

// fib(0) => 0
// fib(1) => 1
// fib(n) => fib(n-1) + fib(n-2)

function fib(number) {
  if(number===0) {
  console.log("zero",0)
  return 0;
} else if(number===1) {
  console.log("one",1)
  return 1;
} else {
  // var arr;
  var a=0, b=1, fibo = 1;
  for (var i = 2; i <= number; i++) {
    fibo = a+b;
    a = b;
    b = fibo
    console.log(i, fibo);
  }
  return fibo;

}
}


module.exports = fib;
