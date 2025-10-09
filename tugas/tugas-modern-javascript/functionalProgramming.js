console.log("");
console.log("SOAL NO 1");
console.log("-----------------");

function hitungPersegi(param) {
  const luas = (param) => {
    return param ** 2;
  };
  const keliling = (param) => {
    return param * 4;
  };
  console.log(`Luas Persegi : ${luas(param)}`);
  console.log(`keliling Persegi : ${keliling(param)}`);
}

function HitungPersegiPanjang(...args) {
  const [p, l] = args;
  const luas = (p, l) => {
    return p * l;
  };
  const keliling = (p, l) => {
    return p * 2 + l * 2;
  };
  console.log(`Luas Persegi Panjang : ${luas(p, l)}`);
  console.log(`keliling Persegi Panjang : ${keliling(p, l)}`);
}

hitungPersegi(8);
HitungPersegiPanjang(12, 7);



console.log("");
console.log("SOAL NO 2");
console.log("-----------------");

function hitungKubus(param) {
  const volume = (param) => {
    return param ** 3;
  };
  const luasPermukaan = (param) => {
    return param ** 2 * 6;
  };
  console.log(`Volume Kubus : ${volume(param)} cm3`);
  console.log(`Luas Permukaan kubus : ${luasPermukaan(param)} cm2`);
}

function HitungBalok(p, l, t) {
  const volume = (p, l, t) => {
    return p * l * t;
  };
  const luasPermukaan = (p, l, t) => {
    return (p * l + p * t + t * l) * 2;
  };
  console.log(`Volume Balok : ${volume(p, l, t)} cm3`);
  console.log(`Luas Permukaan balok : ${luasPermukaan(p, l, t)} cm2`);
}
hitungKubus(8);
HitungBalok(12, 7, 5);



console.log("");
console.log("SOAL NO 3");
console.log("-----------------");

var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

people.sort(function (a, b) {
  return a.age - b.age;
});

function urutData(param, i = 0) {
  if (i >= param.length) return;
  console.log(i + 1 + ". " + param[i].name);
  urutData(param, i + 1);
}
urutData(people);



console.log("");
console.log("SOAL NO 4");
console.log("-----------------");

var phones = [
  {
    name: "Samsung Galaxy A52",
    brand: "Samsung",
    year: 2021,
    colors: ["black", "white"],
  },
  {
    name: "Redmi Note 10 Pro",
    brand: "Xiaomi",
    year: 2021,
    colors: ["white", "blue"],
  },
  {
    name: "Redmi Note 9 Pro",
    brand: "Xiaomi",
    year: 2020,
    colors: ["white", "blue", "black"],
  },
  { name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"] },
  {
    name: "Iphone 11",
    brand: "Apple",
    year: 2019,
    colors: ["gold", "black", "silver"],
  },
];

phones.sort(function (a, b) {
  return a.year - b.year;
});

function filterPhones(param, i = 0) {
  if (i >= param.length) return;
  for (j = 0; j < param[i].colors.length; j++) {
    if (param[i].colors[j] == "black") {
      console.log(
        `${i + 1} . ${param[i].name}, colors available: ${String(
          param[i].colors
        ).replace(",", ", ")}`
      );
    }
  }
  filterPhones(phones, i + 1);
}
filterPhones(phones);
