
var tanggal = 23;
var bulan = 4; 
var tahun = 2019;

var strTanggal = String(tanggal);
var strTahun = String(tahun);

if (tanggal <1 || tanggal >31) {
strTanggal = 'tanggal tidak terdaftar di kalender !,'
}

switch(bulan) {
  case 1:
    bulan = ' Januari ';
    break;
  case 2:
    bulan = ' Februari ';
    break;
  case 3:
    bulan = ' Maret ';
    break;
  case 4:
    bulan = ' April ';
    break;
  case 5:
    bulan = ' Mei ';
    break;
  case 6:
    bulan = ' Juni ';
    break;
  case 7:
    bulan = ' Juli ';
    break;
  case 8:
    bulan = ' Agustus ';
    break;
  case 9:
    bulan = ' September ';
    break;
  case 10:
    bulan = ' Oktober ';
    break;
  case 11:
    bulan = ' November ';
    break;
  case 12:
    bulan = ' Desember ';
    break;
  default:
  console.log('Bulan tidak terdaftar di kalender !')
}

if (tahun <1900 || tahun >2200) {
strTahun = ', tahun tidak terdaftar di kalender !'
}

console.log(strTanggal + bulan + strTahun)
