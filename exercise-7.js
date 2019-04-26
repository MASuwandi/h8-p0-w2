
// 1. Menyusun Barisan Bintang

var rows1; // input the number of rows

// do loops to display asterisks in the console.

rows1 = 5;
while (rows1 >= 1) {
  console.log('*')
  rows1--;
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping (special request)

function asterisks(){
  var rows2;
  rows2 = 5;
  var result = '';
  for (i = rows2; i >= 1; i--) {
    for (j = rows2; j >= 1; j--) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}
console.log(asterisks())


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3; // input the number of rows

// do loops to display asterisks in the console.

rows3 = 5
var result = '';
  while(rows3 >= 1) {
    result += '*';
    console.log(result);
    rows3--
  }

