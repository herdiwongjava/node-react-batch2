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
function tambahDataFilm(nama, durasi, genre, tahun) {
  var film = {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun
  };
  dataFilm.push(film);
}

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);



console.log("");
console.log("SOAL KE 3");
console.log("-----------------");

var people = [
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

var lakiLakiTua = people.filter(function(person) {
  return person.gender === "male" && person.age > 29;
});

console.log(lakiLakiTua);



console.log("");
console.log("SOAL KE 4");
console.log("-----------------");

var totalUsia = people.reduce(function(acc, person) {
  return (acc + person.age);
}, 0);
var rataRataUsia = totalUsia / people.length;

console.log(rataRataUsia);  



console.log("");
console.log("SOAL KE 5");
console.log("-----------------");

people.sort(function(a, b) {
  return a.age - b.age;
});

for (i = 0; i < people.length; i++) {
  console.log((i + 1) + ". " + people[i].name);
}



console.log("");
console.log("SOAL KE 6");
console.log("-----------------");

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
};

function addColors(newColor) {
  phone.colors.push(newColor);
}

addColors("Gold");
addColors("Silver");
addColors("Brown");

console.log(phone);





