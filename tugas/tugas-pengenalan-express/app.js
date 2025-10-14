const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>TUGAS PENGENALAN EXPRESS.JS</h1>");
});

const handlerLingkaranTabung = (req, res) => {
  let { r, t } = req.query;

  r = Number(r) || 0;
  t = Number(t) || 0;

  const volumeTabung = (22 / 7) * r ** 2 * t;
  const luasAlasTabung = (22 / 7) * r ** 2;
  const kelilingAlasTabung = 2 * (22 / 7) * r;

  res.json({
    "soal": "SOAL NO 1",
    success: true,
    "jari jari": r,
    tinggi: t,
    "volume Tabung": volumeTabung,
    "luas Alas Tabung": luasAlasTabung,
    "keliling Alas Tabung": kelilingAlasTabung,
  });
};
app.get("/lingkaran-tabung", handlerLingkaranTabung);
//localhost:3000/lingkaran-tabung?r=7&t=10


const handlerDataOrang = (req, res) => {
  let dataOrang = [
    {
      id: 1,
      name: "John",
      umur: 30,
      pekerjaan: "Penulis",
      jenisKelamin: "L",
    },
    {
      id: 4,
      name: "Benzema",
      umur: 34,
      pekerjaan: "Pemain Bola",
      jenisKelamin: "L",
    },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    {
      id: 9,
      name: "Shohei Ohtani",
      umur: 28,
      pekerjaan: "Pemain Baseball",
      jenisKelamin: "L",
    },
    {
      id: 11,
      name: "Maria Sharapova",
      umur: 35,
      pekerjaan: "Petenis",
      jenisKelamin: "P",
    },
  ];

  let { umur, gender } = req.query;

  umur = Number(umur) || 0;
  gender = gender || false;

//RESPON JSON
//   const filteredData = dataOrang.filter((orang) =>
//     gender
//       ? orang.umur >= umur && orang.jenisKelamin == gender
//       : orang.umur >= umur
//   );
//   res.send(filteredData);


//RESPON STRING
  let result = "SOAL NO 2</br>";
  dataOrang.forEach((orang, i) => {
    if (gender) {
      if (orang.umur >= umur && orang.jenisKelamin == gender) {
        result += `${i + 1}. ${orang.name} - Pekerjaan:${
          orang.pekerjaan
        } - Umur:${orang.umur} <br>`;
      }
    } else {
      if (orang.umur >= umur) {
        result += `${i + 1}. ${orang.name} - Pekerjaan:${
          orang.pekerjaan
        } - Umur:${orang.umur} <br>`;
      }
    }
  });
  res.send(result);
};
app.get("/data-orang", handlerDataOrang);
//localhost:3000/data-orang?umur=30&gender=L


const handlerDataOrangById = (req, res) => {
  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    {
      id: 4,
      name: "Benzema",
      umur: 34,
      pekerjaan: "Pemain Bola",
      jenisKelamin: "L",
    },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    {
      id: 9,
      name: "Shohei Ohtani",
      umur: 28,
      pekerjaan: "Pemain Baseball",
      jenisKelamin: "L",
    },
    {
      id: 11,
      name: "Maria Sharapova",
      umur: 35,
      pekerjaan: "Petenis",
      jenisKelamin: "P",
    },
  ];
  let { id } = req.params;
  id = Number(id);

  //RESPON JSON
  //   const filteredData = dataOrang.filter((orang) => orang.id === id);
  //   if (filteredData.length === 0) {
  //     return res.status(404).json({
  //       success: false,
  //       message: "Maaf data tidak ditemukan",
  //       data: [],
  //     });
  //   }
  //   res.json({
  //     success: true,
  //     total: filteredData.length,
  //     data: filteredData,
  //   });

  //RESPON STRING
  let result = "SOAL NO 3</br>";
  dataOrang.forEach((orang) => {
    if(orang.id === id){
        result += `${orang.jenisKelamin == "P" ? "Bu" : "Pak"} ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`;
    } else {
        result = `Maaf data tidak di temukan`
    }
  })
  res.send(result);
};
app.get("/data-orang/:id", handlerDataOrangById);
//localhost:3000/data-orang/1

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
