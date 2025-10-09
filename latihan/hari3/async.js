console.log("");
console.log("CALLBACK");
console.log("-----------------");

const periksaDokter = (nomorAntri, callback) => {
  nomorAntri > 5 ? callback(false) : callback(true);
};

periksaDokter(6, (check) => {
  check
    ? console.log("sebentar lagi saya masuk")
    : console.log("saya nunggu aja ");
});

const periksaAntrianDokter = (nomorAntri, callback) => {
  console.log(`sekarang nomor antri ke ${nomorAntri}`);
  setTimeout(() => {
    if (nomorAntri === 10) {
      console.log("Akhirnya saya diperiksa");
      callback(0);
    } else {
      console.log("masih nunggu di luar");
      callback(nomorAntri + 1);
    // periksaAntrianDokter(nomorAntri+1)
    }
  }, 2000);
};


const execute = (nomorAntri) => {
    periksaAntrianDokter(nomorAntri, (nomorAntrianBaru) => {
     nomorAntrianBaru !== 0 && execute(nomorAntrianBaru);
    });
}
execute(2);