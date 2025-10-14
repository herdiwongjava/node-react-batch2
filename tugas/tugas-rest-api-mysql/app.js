const express = require("express");
const app = express();
const port = 3000;

import { connectionPool } from "./mysql";

const handleInsertData = (req, res) => {
  const { nama, mata_kuliah, nilai } = req.body;
  const cek_index = (nilai) => {
    if (nilai >= 80) {
      return "A";
    } else if (nilai >= 70 && nilai < 80) {
      return "B";
    } else if (nilai >= 60 && nilai < 70) {
      return "C";
    } else if (nilai >= 50 && nilai < 60) {
      return "D";
    } else {
      return "B";
    }
  };
  const indeks_nilai = cek_index();

  const queryInsert = `
    INSERT INTO "db_universitas"."nilai_mahasiswa" 
    ("nama", "mata_kuliah", "nilai", "indeks_nilai", "created_at", "updated_at")
    VALUES
    ("${nama}", "${mata_kuliah}", ${Number(
    nilai
  )}, "${indeks_nilai}", NOW(), NOW())`;

  connectionPool.query(queryInsert, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.json("data was successfully created");
  });
};
app.post("/tambah", handleInsertData);

//root
app.get("/", (req, res) => {
  res.send("TUGAS REST API & MYSQL");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
