console.log("");
console.log("while");


function tampilkan() {
    console.log("halo!")
}
tampilkan();


function munculkanAngkaDua() {
    return 2
}
var tampung = munculkanAngkaDua()
console.log(tampung)


function kalikanDua(angka) {
    return angka * 2
}
var tampungKaliDua = kalikanDua(2);
console.log(tampungKaliDua)


function tampilkanAngka(angkaPertama, angkaKedua=2) {
    return angkaPertama + angkaKedua
}
console.log(tampilkanAngka(5, 3))
console.log(tampilkanAngka(6))


var fungsiPerkalian = function(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
}
console.log(fungsiPerkalian(2, 5))


