
// Logic Challenge - Konversi Menit

function konversiMenit(menit) {
  var menitOlah = menit;
  var jamDesimal = (menitOlah / 60);
  var jamBulat = Math.floor(jamDesimal);
  var menitBulat = menit % 60;
  if(menitBulat < 10) { 
    menitBulat = '0' + menitBulat;
  } 
  return jamBulat + ':' + menitBulat;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

