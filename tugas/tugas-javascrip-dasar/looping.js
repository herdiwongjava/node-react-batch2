console.log("");
console.log("SOAL KE 1");
console.log("-----------------");


for (let i = 1; i <= 20; i++) {
  if (i === 1) {
    console.log("LOOPING PERTAMA");
  }
  console.log(i + " - I love coding");

  if (i === 20) {
    console.log("LOOPING KEDUA");
    for (let j = 20; j > 1; j--) {
      console.log(j + " - I will become a MERN Stack developer");
    }
  }
}


console.log("");
console.log("SOAL KE 2");
console.log("-----------------");

for (i = 1; i <= 20; i++) {
  i % 2 == 0
    ? console.log(i + " - Angka Genap")
    : console.log(i + " - Angka Ganjil");
}

console.log("");
console.log("SOAL KE 3");
console.log("-----------------");

for (i = 1; i <= 20; i++) {
  i % 2 == 0
    ? i % 3 == 0
      ? console.log(i + " - ToT")
      : console.log(i + " - Berkualitas")
    : i % 3 == 0
    ? console.log(i + " - I Love Coding")
    : console.log(i + " - Santai");
}

console.log("");
console.log("SOAL KE 4");
console.log("-----------------");

for (i = 1; i <= 7; i++) {
  var row = "";
  for (var j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}



console.log("");
console.log("SOAL KE 5");
console.log("-----------------");

var sentence = "Fullstack Developer";
var hasil = "";

for (i = 0; i < sentence.length; i++) {
  var huruf = sentence[i].toLowerCase();

  if ("aiueo ".indexOf(huruf) === -1) {
    hasil += sentence[i]; 
  }
}
console.log(hasil);

