/*
Logic Challenge - X dan O
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

Code
*/
function xo(str) {
  // you can only write your code here!
  var tempX = 0;
  var tempO = 0;
  var equalAmount = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
      tempO++
    } else if (str[i] === 'x') {
      tempX++
    }
  }
  if (tempX === tempO) {
    equalAmount = true;
  }
  return equalAmount;
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
