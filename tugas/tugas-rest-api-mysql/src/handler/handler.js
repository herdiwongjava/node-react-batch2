const { conn } = require("../config/db");

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
    return "E";
  }
};

const handleInsertData = (req, res) => {
  const { nama, mata_kuliah, nilai } = req.body;

  if (nilai < 0 || nilai > 100) {
    res.json({ message: "data nilai salah" });
    return;
  }

  const indeks_nilai = cek_index(nilai);

  const queryInsert = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at) 
  VALUES (?, ?, ?, ?, NOW(), NOW())`;

  conn.query(
    queryInsert,
    [nama, mata_kuliah, nilai, indeks_nilai],
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      res.json({
        message: "data was successfully created",
        status: "success",
        id_created: data.insertId,
      });
    }
  );
};

const handelSelectData = (req, res) => {
  const query = `SELECT * FROM nilai_mahasiswa`;
  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
};

const handleSelectDataById = (req, res) => {
  const { id } = req.params;
  query = `SELECT * FROM nilai_mahasiswa WHERE id=?`;
  conn.query(query, [id], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const result = data.map((all) => {
      const { nama, mata_kuliah, indeks_nilai, nilai } = all;

      return {
        indeks_nilai,
        mata_kuliah,
        nama,
        nilai,
      };
    });

    res.json(result);
  });
};

const handleSelectByGrade = (req, res) => {
  const { grade } = req.params;
  const query = `SELECT * FROM nilai_mahasiswa WHERE indeks_nilai=?`;
  conn.query(query, [grade], (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(data);
  });
};

const handleSelectByNilai = (req, res) => {
  const { nilai } = req.params;
  const query = `SELECT * FROM nilai_mahasiswa WHERE nilai between ? AND 100`;
  conn.query(query, [nilai], (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.json(data);
  });
};

const handleUpdateData = (req, res) => {
  const { id } = req.params;
  const { nama, mata_kuliah, nilai } = req.body;

  if (nilai < 0 || nilai > 100) {
    res.json({ message: "data nilai salah" });
    return;
  }

  const indeks_nilai = cek_index(nilai);

  const query = `UPDATE nilai_mahasiswa SET nama=?, mata_kuliah=?, nilai=?, indeks_nilai=?, updated_at=NOW() WHERE id=?`;
  conn.query(
    query,
    [nama, mata_kuliah, nilai, indeks_nilai, id],
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json(
        data.affectedRows != 0
          ? {
              message: "data successfully updated",
              status: "success",
              change: {
                id,
                nama,
                mata_kuliah,
                nilai,
                indeks_nilai,
              },
            }
          : {
              message: `id ${id} tidak ditemukan`,
              status: "filed",
            }
      );
    }
  );
};

const handleDeleteData = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM nilai_mahasiswa WHERE id=?`;
  conn.query(query, [id], (err, data) => {
    if (err) {
      console.error(err);
    }
    res.json(
      data.affectedRows != 0
        ? {
            message: "data successfully deleted",
            status: "success",
            id_deleted: id,
          }
        : {
            message: `id ${id} tidak ditemukan`,
            status: "filed",
          }
    );
  });
};

module.exports = {
  handleInsertData,
  handelSelectData,
  handleSelectDataById,
  handleSelectByGrade,
  handleSelectByNilai,
  handleUpdateData,
  handleDeleteData,
};
