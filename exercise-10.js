
// Logic Challenge - Bandingkan Angka

function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if(angka2 > angka1) {
    return true;
  }
  if(angka2 < angka1) {
    return false;
  }
  if(angka2 === angka1) {
    return -1;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

