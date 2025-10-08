console.log("");
console.log("SOAL KE 1");
console.log("-----------------");

var buah = [
  { nama: "Nanas", warna: "Kuning", "ada bijinya": "tidak", harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", "ada bijinya": "ada", harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  { nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000 },
];

var buahMulus = buah.filter((cek) => cek["ada bijinya"] ===  "tidak")
console.log(buahMulus)


console.log("");
console.log("SOAL KE 2");
console.log("-----------------");

var dataFilm = []

function tambahDataFilm(judul, dursi, genre, tahun){
    dataFilm.push(data);
}

