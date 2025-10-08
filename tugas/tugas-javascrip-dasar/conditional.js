console.log("");
console.log("SOAL KE 1");
console.log("-----------------");

var sentence =
  "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if (sentence.length > 30) {
  console.log("sentance panjang");
} else if (sentence.length >= 10 && sentence.length <= 30) {
  console.log("sentance sedang");
} else {
  console.log("pendek");
}



console.log("");
console.log("SOAL KE 2");
console.log("-----------------");

var nilai = 75
if (nilai >= 80) {
    console.log("index A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("index B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("index C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("index D");
} else {
    console.log("index E");
}



console.log("");
console.log("SOAL KE 3");
console.log("-----------------");

var tanggal = 24;
var bulan = 12;
var tahun = 1993;

switch (bulan) {
  case 1: {
    console.log(tanggal + " Januari " + tahun);
    break;
  }
  case 2: {
    console.log(tanggal + " Februari " + tahun);
    break;
  }
  case 3: {
    console.log(tanggal + " Maret " + tahun);
    break;
  }
  case 4: {
    console.log(tanggal + " April " + tahun);
    break;
  }
  case 5: {
    console.log(tanggal + " Mei " + tahun);
    break;
  }
  case 6: {
    console.log(tanggal + " Juni " + tahun);
    break;
  }
  case 7: {
    console.log(tanggal + " Juli " + tahun);
    break;
  }
  case 8: {
    console.log(tanggal + " Agustus " + tahun);
    break;
  }
  case 9: {
    console.log(tanggal + " September " + tahun);
    break;
  }
  case 10: {
    console.log(tanggal + " Oktober " + tahun);
    break;
  }
  case 11: {
    console.log(tanggal + " November " + tahun);
    break;
  }
  case 12: {
    console.log(tanggal + " Desember " + tahun);
    break;
  }
  default: {
    console.log("Bulan yang di masukkan salah");
  }
}




