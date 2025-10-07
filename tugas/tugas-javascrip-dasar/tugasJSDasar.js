console.log('Tugas No 1')
var perkenalan = 'Nama saya adalah';
var nama ='Eko Herdianto'
var kata1 = 'saya'
var kata2 = 'berharap'
var kata3 = 'untuk'
var kata4 = 'menjadi'
var kata5 = 'seorang'
var kata6 = 'software'
var kata7 = 'engineer'

console.log(
    perkenalan +
    " " +
    nama +
    ". " +
    kata1 +
    " " +
    kata2 +
    " " +
    kata3 +
    " " +
    kata4 +
    " " +
    kata5 +
    " " +
    kata6 +
    " " +
    kata7
);


console.log('')
console.log('-------------------')
console.log('Tugas No 2')
console.log('-------------------')
//              012345678910111213141516171819202122232425
// var abjad = "ABCDEFGHIJ K L M N O P Q R S T U V W X Y Z";
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)


console.log('')
console.log('-------------------')
console.log('Tugas No 3')
console.log('-------------------')
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15,17);
var fourthWord2 = sentence2.substring(18,20)
var fifthWord2 = sentence2.substring(21,25)

console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

console.log('')
console.log('-------------------')
console.log('Tugas No 4')
console.log('-------------------')

var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthdWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log(
  "First Word: " + exampleFirstWord3 + ", with length: " + firstWordLength
);
console.log(
    "Second Word: " + secondWord3 + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log(
    "Fourth Word: " + fourthWord3 + ", with length: " + fourthdWordLength
);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);


console.log('')
console.log('-------------------')
console.log('Tugas No 5')
console.log('-------------------')
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// 2. password kedua : WORLD
var kode2 =
abjad.indexOf("W") +
"-" +
abjad.indexOf("O") +
"-" +
abjad.indexOf("R") +
"-" +
abjad.indexOf("L") +
"-" +
abjad.indexOf("D");
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 =
abjad.indexOf("I") +
"-" +
abjad.indexOf("M") +
"-" +
abjad.indexOf("R") +
"-" +
abjad.indexOf("E") +
"-" +
abjad.indexOf("A") +
"-" +
abjad.indexOf("D") +
"-" +
abjad.indexOf("Y");
console.log("kode 3: " + kode3)


console.log('')
console.log('-------------------')
console.log('Tugas No 6')
console.log('-------------------')
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";
//Saya SenanG BelajaR JAVASCRIPT
console.log(pertama.replace("s", "S") + " " + (kedua.replace("s", "S")).replace("g", "G") + " " + (ketiga.replace("b","B")).replace("r", "R") + " " + keempat.toUpperCase())


console.log('')
console.log('-------------------')
console.log('Tugas No 7')
console.log('-------------------')

var panjang ="12"
var lebar = "7"
var alas = "6"
var tinggi = "13"

console.log("Luas persegi panjang : ")
console.log(parseInt(panjang)*parseInt(lebar))

console.log("")
console.log("Luas Segitiga : ")
console.log(0.5*parseInt(alas)*parseInt(tinggi))

console.log('')
console.log('-------------------')
console.log('Tugas No 8')
console.log('-------------------')
var sisi = "1 2"
var jarijari = "7.5"

console.log("Luas Persegi: ")
console.log(
  Number(sisi.replaceAll(" ", ""))**2)

console.log("")
console.log("Luas lingkaran :")
console.log(
  3.14 * parseFloat(jarijari)**2);