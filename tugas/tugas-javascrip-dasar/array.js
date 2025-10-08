console.log("");
console.log("SOAL KE 1");
console.log("-----------------");

var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output =
  "Halo, nama saya " +
  dataPeserta[0] +
  ". saya " +
  dataPeserta[1] +
  " berumur " +
  dataPeserta[3] +
  " bekerja sebagai seorang " +
  dataPeserta[2];
;
console.log(output)



console.log("");
console.log("SOAL KE 2");
console.log("-----------------");

var sayuran = [];
sayuran.push("Kangkung")
sayuran.push("Bayam")
sayuran.push("Buncis")
sayuran.push("Kubis")
sayuran.push("Timun")
sayuran.push("Seledri")
sayuran.push("Tauge")
console.log(sayuran)



console.log("");
console.log("SOAL KE 3");
console.log("-----------------");

sayuran.sort()
for(i=0;i<sayuran.length;i++){
    console.log((i+1) +". "+ sayuran[i])
}



console.log("");
console.log("SOAL KE 4");
console.log("-----------------");

var word = "car";
word = [
  word.substring(0,1),
  word.substring(0, 2),
  word.substring(0, 3),
  word.substring(1, 2),
  word.substring(1, 3),
  word.substring(2),
];
console.log(word)



console.log("");
console.log("SOAL KE 5");
console.log("-----------------");

var numbers = [4, 5, 1, 4, 6, 8, 9, 21];

var jumlah = 0
for(i=0;i<numbers.length;i++){
    jumlah + numbers
}
console.log(jumlah)


