console.log("");
console.log("TUGAS NO.1 - CALLBACK");
console.log("-----------------");

var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

const mulaiBaca = (time, books, i = 0) => {

  if (i >= books.length) {
    console.log("Semua buku sudah dicoba dibaca.");
    return;
  }

  readBooks(time, books[i], (sisaWaktu) => {
    sisaWaktu >= books[i].timeSpent 
    ? mulaiBaca(sisaWaktu, books, i + 1)
    : console.log(`${sisaWaktu > 0 
      ? `Waktu sisa ${sisaWaktu}, gak cukup buat buku ${books[i].name},` 
      : "Waktu habis,"} gak bisa lanjut baca lagi..`)
  });
};
mulaiBaca(20000, books);

