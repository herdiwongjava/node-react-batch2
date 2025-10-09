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
  }, 1000);
};


const execute = (nomorAntri) => {
    periksaAntrianDokter(nomorAntri, (nomorAntrianBaru) => {
     nomorAntrianBaru !== 0 && execute(nomorAntrianBaru);
    });
}
execute(10);


console.log("");
console.log("PROMISE");
console.log("-----------------");

let isMomHappy = false

let willIGetNewPhone = new Promise(
  (resolve, reject)=>{
    if(isMomHappy){
      let phone ={
        brand: 'Samsung',
        color: 'black'
      }
      resolve(phone)
    } else {
      let reason = new Error('mom is not happy')
      reject(reason)
    }
  }
)

function askMom(){
  willIGetNewPhone
  .then((fulfilled) => {
    console.log(fulfilled)
  })
  .catch((error) => {
    console.log(error.message);
  })
}

askMom()