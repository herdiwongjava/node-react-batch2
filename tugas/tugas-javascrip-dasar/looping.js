console.log("");
console.log("SOAL KE 1");
console.log("-----------------");

var loopPertama = 1;
while (loopPertama <= 20) {
  loopPertama == 1
    ? console.log("LOOPING PERTAMA")
    : console.log(loopPertama + " - I love coding");
  loopPertama++;
}
var loopKedua = 20;
while (loopKedua > 1) {
  loopKedua == 20
    ? console.log("LOOPING KEDUA")
    : console.log(loopKedua + " - I will become a MERN Stack developer");
  loopKedua--;
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
for(i = 0; i < sentence.length; i++){
    var konsonan = ["b","c","d","D","f","F","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
    konsonan.forEach((huruf) =>
     sentence[i] === huruf ? console.log(sentence[i]) : null
    ); 
    
}

