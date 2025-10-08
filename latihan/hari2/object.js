console.log("");
console.log("OBJECT");
console.log("-----------------");

var car = {
  brand: "Ferrari",
  type: "Sports Car",
  price: 500000000,
  "horse power": 986,
};

var myMotorCycle = {
  brand: "Honda",
  type: "CBR",
  "price tag": 30000000,
};
console.log(myMotorCycle.brand);
console.log(myMotorCycle["price tag"]);



console.log("");
console.log("ARRAY OBJECT");
console.log("-----------------");

var mobil = [
    {merk:"BMW", warna:"merah", tipe:"sedan" },
    {merk:"toyota", warna:"hitam", tipe:"box" },
    {merk:"audi", warna:"biru", tipe:"sedan" }
]
console.log(mobil)


console.log("");
console.log("FOR EACH");
console.log("-----------------");

mobil.forEach(function(item){
    console.log("warna : " + item.warna)
})



console.log("");
console.log("MAP");
console.log("-----------------");

var arrayWarna = mobil.map(function(item){
    return item.warna
})
console.log(arrayWarna)



console.log("");
console.log("FILTER");
console.log("-----------------");

var arrayMobilFilter = mobil.filter(function(item){
    return item.tipe != "sedan"
})
console.log(arrayMobilFilter)











