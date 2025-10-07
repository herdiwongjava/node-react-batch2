var nama = "Eko Herdianto"
var nomorUrut = 4
var isTrue = true
var angka1 = 5
var angka2 = 10

console.log(nomorUrut);
console.log(nama);
console.log(isTrue);
console.log(angka1 * angka2);
console.log(angka1 == angka2);

console.log("-------------------------")

var benar = true
var salah = false

console.log(benar && benar);
console.log(benar || salah);
console.log(nama.length);

console.log("-------------------------")

console.log(nama.charAt(6));
console.log(nama.concat(angka2));
console.log(nama.indexOf(" "));
console.log(nama.substring(5, 6));

console.log("-------------------------")

console.log(nama.toUpperCase());
console.log(nama.toLowerCase());
console.log(nama.trim());
console.log(nama.replace("E", "I"));
console.log(nama.replaceAll(" ", "-"));

console.log("-------------------------")

var bilangan = 10
var pecahan = 11.5
var array = [1,2,3]

var bilanganString = String(bilangan)
var pecahanString = String(pecahan)
var arrayString = String(array)

console.log(bilanganString)
console.log(pecahanString);
console.log(arrayString);

console.log("-------------------------")

console.log(bilangan.toString());
console.log(pecahan.toString());
console.log(array.toString());

console.log("-------------------------")

var bilanganNumber = Number(bilanganString)
var pecahanNumber = Number(pecahanString)
var arrayNumber = Number(arrayString)


console.log(bilanganNumber)
console.log(pecahanNumber)
console.log(arrayNumber)

console.log("-------------------------")

console.log(parseInt(bilanganNumber));
console.log(parseFloat(pecahanNumber));
console.log(parseInt(arrayNumber));





