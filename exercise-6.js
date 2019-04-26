
// 1. Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA');
var number = 2;
while(number <= 20) {
  console.log(number + ' - I love coding')
  number += 2;
}
console.log('LOOPING KEDUA');
number =  20;
while(number >= 2) {
  console.log(number + ' - I will become fullstack developer')
  number -= 2;
}


// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding')
}
console.log('LOOPING KEDUA');
for (var i = 20; i > 0; i--) {
  console.log(i + ' - I will become fullstack developer')
}


// 3. Angka Ganjil dan Genap

console.log("Counter 1")
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + '"GENAP"')
  } else {
    console.log(i + '"GANJIL"')
  }
}
console.log()

console.log("Counter 2")
for (var i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log('"' + i + ' KELIPATAN 3"')
  } else {
    console.log('""')
  }
}
console.log()

console.log("Counter 5")
for (var i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log('"' + i + ' KELIPATAN 6"')
  } else {
    console.log('""')
  }
}
console.log()

console.log("Counter 9")
for (var i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log('"' + i + ' KELIPATAN 10"')
  } else {
    console.log('""')
  }
}


