const { reject } = require("async");

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
};
execute(10);

console.log("");
console.log("PROMISE");
console.log("-----------------");

let isMomHappy = false;

let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    let reason = new Error("mom is not happy");
    reject(reason);
  }
});

function askMom() {
  willIGetNewPhone
    .then((fulfilled) => {
      console.log(fulfilled);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

askMom();

console.log("");
console.log("PROMISE 2");
console.log("-----------------");

const periksaDataPasien = (nomorIdPasien) => {
  let dataPasien = [
    { id: 1, nama: "john", jenisKelamin: "Laki-laki" },
    { id: 2, nama: "Michael", jenisKelamin: "Laki-laki" },
    { id: 3, nama: "Sarah", jenisKelamin: "Perempuan" },
    { id: 4, nama: "Frank", jenisKelamin: "Laki-laki" },
  ];

  return new Promise((resolve, reject) => {
    let pasien = dataPasien.find((x) => x.id === nomorIdPasien);
    pasien === undefined ? reject("data pasien tidak ada") : resolve(pasien);
  });
};

periksaDataPasien(2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log("");
console.log("ASYNC AWAIT");
console.log("-----------------");

const doAsync = () => {
  return new Promise((resolve, reject) => {
    let check = true;
    check ? resolve("berhasi") : reject("gagal");
  });
};

const hello = async () => {
  try {
    let result = await doAsync();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

hello();
