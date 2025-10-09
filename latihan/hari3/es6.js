console.log("");
console.log("CONST-LET");
console.log("-----------------");

let nama = "doe"
const pi = "3.14"

console.log(nama);



console.log("");
console.log("ARR-FUNC");
console.log("-----------------");

const myFunc = (nama) => {
    console.log(nama);
}
myFunc(nama)



console.log("");
console.log("DEFAUT-PARAMS");
console.log("-----------------");

const myParams = (nama="jhon") => {
  console.log(nama);
};
myParams()



console.log("");
console.log("TAMPLATE LITERALS");
console.log("-----------------");

let word = "example"
let result = `this is ${word} and ${nama}`
console.log(result)



console.log("");
console.log("ENCANCED LITERALS");
console.log("-----------------");

let orang = {
    nama,
    tua:"gak tua",
    baik:"iya, baik",

};
console.log(orang);



console.log("");
console.log("DESTRUCTUR");
console.log("-----------------");

const {tua, baik="sehat"} = orang
console.log(tua);
console.log(baik);



console.log("");
console.log("REST + SPREAD");
console.log("-----------------");

let arrayBuah = ["mangga", "durian", "nanas", "semangka", "anggur"]
let [buah1, ...buah5] = arrayBuah
console.log(buah1)
console.log(buah5)

arrayBuah = ["anggur", ...arrayBuah]
console.log(arrayBuah)
console.log(buah1)

arrayBuah = [...arrayBuah, "anggur"]
console.log(arrayBuah)

const { ...args } = orang;
console.log(baik);
console.log(tua);

const spread = (...args) => {
    console.log(tua);
    console.log(baik)
}
spread(orang)



