console.log("");
console.log("SOAL NO 1");
console.log("-----------------");

let r = 20;

const luasLingkaran = (r) => {
  return 3.14 * r ** 2;
};
const kelilingLingkaran = (r) => {
  return 2 * 3.14 * r;
};
console.log(luasLingkaran(r));
console.log(kelilingLingkaran(r));


console.log("");
console.log("SOAL NO 2");
console.log("-----------------");

const introduce = (...args) => {
  let [name, age, gender, job] = args;
  return `${gender == "Perempuan" ? "Bu" : "Pak" } ${name.replace(
    `${name[0]}`,
    `${name[0].toUpperCase()}`
  )} adalah seorang ${job} yang berusia ${age} tahun`;
};
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn);
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah);


console.log("");
console.log("SOAL NO 3");
console.log("-----------------");

const newFunctionEs5 = function literal(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
    },
  };
};

const newFunction = (...args) => {
  const [firstName, lastName] = args;
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(firstName + " " + lastName);
    },
  };
};
console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();



console.log("");
console.log("SOAL NO 4");
console.log("-----------------");

let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const {
  name: phoneName,
  brand: phoneBrand,
  year,
  colors: [colorBronze, , colorBlack],
} = phone;
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);



console.log("");
console.log("SOAL NO 5");
console.log("-----------------");

let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku = {...buku, ...dataBukuTambahan}
buku.warnaSampul = [...buku.warnaSampul, ...warna]
console.log(buku)



console.log("");
console.log("SOAL NO 6");
console.log("-----------------");

let samsung = {
  name: "Samsung",
  products: [
    { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
    { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
    { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] },
  ],
};

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] },
];

const addProducts = (brand, newData) => {
   brand.products = [...brand.products, ...newData];
   return brand
};

samsung = addProducts(samsung, newProducts);
console.log(samsung);



console.log("");
console.log("SOAL NO 7");
console.log("-----------------");

let data = ["Bondra", "Medan", 25];
const [nama, domisili, umur] = data;

const konversiObject = (nama, domisili, umur) => {
  return {
    nama,
    domisili,
    umur,
  };
};
const result = konversiObject(nama, domisili, umur);
console.log(result);


console.log("");
console.log("SOAL NO 8");
console.log("-----------------");

const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
    { name: "Yogi", class: "react"},
    { name: "Fikri", class: "agile"},
    { name: "Arief", class: "agile"}
]

const graduate = (...students) => {
    const result = {};
    students[0].forEach(({ name, class: className }) => {
        if (!result[className]) {
            result[className] = [];
        }
        result[className] = [...result[className], name];
    });
    
    return result;
};

console.log(graduate(data1))
console.log(graduate(data2))