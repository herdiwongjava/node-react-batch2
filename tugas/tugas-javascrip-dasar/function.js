console.log("");
console.log("SOAL KE 1");
console.log("-----------------");

function introduce(name, gender, job, age) {
  return (
    "Pak " +
    name +
    " adalah seorang " +
    job +
    " " +
    gender +
    " yang berusia " +
    age +
    " tahun"
  );
}
var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);



console.log("");
console.log("SOAL KE 2");
console.log("-----------------");

var text = "Super Bootcamp Fullstack Dev 2022";
function cariHuruf(str) {
  var lowerStr = str.toLowerCase();
  var hasil = "";

  for (i = 0; i < lowerStr.length; i++) {
    var char = lowerStr[i];
    if (lowerStr.indexOf(char) === lowerStr.lastIndexOf(char)) {
      hasil += char;
    }
  }

  return hasil;
}
console.log(cariHuruf(text));



console.log("");
console.log("SOAL KE 3");
console.log("-----------------");

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
function terbesarTerkecil(arr) {
  var terbesar = arr[0];
  var terkecil = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }
    if (arr[i] < terkecil) {
      terkecil = arr[i];
    }
  }
  return {terbesar, terkecil};
}
console.log(terbesarTerkecil(angka));




console.log("");
console.log("SOAL KE 4");
console.log("-----------------");

function arrangeString(str) {
  return str.split("").sort().join("");
}

console.log(arrangeString("bahasa"));
console.log(arrangeString("similikiti"));
console.log(arrangeString("sanbercode"));
console.log(arrangeString(""));



console.log("");
console.log("SOAL KE 5");
console.log("-----------------");

function palindrome(kata) {
  var lowerKata = kata.toLowerCase();
  var reversed = lowerKata.split('').reverse().join('');
  return lowerKata === reversed;
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('nababan'));
console.log(palindrome('haji ijah'));
console.log(palindrome('mister'));



console.log("");
console.log("SOAL KE 6");
console.log("-----------------");

function angkaPalindrome(num) {
  function isPalindrome(number) {
    var str = number.toString();
    var reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  var nextNum = num + 1;
  while (true) {
    if (isPalindrome(nextNum)) {
      return nextNum;
    }
    nextNum++;
  }
}
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));



console.log("");
console.log("SOAL KE 7");
console.log("-----------------");
function cekPermutasi(str1, str2) {
  function clean(str) {
    return str.toLowerCase().split('').sort().join('');
  }

  return clean(str1) === clean(str2);
}
console.log(cekPermutasi("abah", "baha"));
console.log(cekPermutasi("ondel", "delon"));
console.log(cekPermutasi("paul sernine", "arsene lupin"));
console.log(cekPermutasi("taco", "taca"));


