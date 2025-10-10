console.log("");
console.log("TUGAS NO.2 - PROMISE");
console.log("-----------------");

var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function mulaiBaca(time, books) {
  const bacaBuku = (index, sisaWaktu) => {
    index < books.length
      ? readBooksPromise(sisaWaktu, books[index])
          .then((waktuBaru) => bacaBuku(index + 1, waktuBaru))
          .catch((err) =>
            console.log(`${err < 0 ? "Waktu habis" : `Waktu sisa ${err}`}, tidak bisa lanjut membaca.`)
          )
      : console.log("Semua buku sudah selesai dibaca.");
  };

  bacaBuku(0, time);
}
mulaiBaca(5000, books);
