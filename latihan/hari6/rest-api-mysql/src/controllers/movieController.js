const { connectionPool } = require("../config/db");

// const movies = [
//   { id: 1, title: "Spider-Man", year: 2002 },
//   { id: 2, title: "John Wick", year: 2014 },
//   { id: 3, title: "The Avengers", year: 2012 },
//   { id: 4, title: "Logan", year: 2017 },
// ];

// const getMovies = (req, res) => {
//   let { query } = req.query;
//   query = query || "";

//   // let result = [];
//   // movies.forEach((movie, i) => {
//   //   movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
//   //     ? (result += `${i + 1} - ${movie.title} | ${movie.year}<br>`)
//   //     : (result = "<h2>Data Tidak Ditemukan</h2>");

//   // });
//   // res.send(result);

//   //API
//   const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(query.toLowerCase())
//   );

//   if (filteredMovies.length === 0) {
//     return res.status(404).json({
//       success: false,
//       message: "Data tidak ditemukan",
//       data: [],
//     });
//   }

//   res.json({
//     success: true,
//     total: filteredMovies.length,
//     data: filteredMovies,
//   });
// };

// const getMovieByID = (req, res) => {
//   const { id } = req.params;
//   result = movies.find((movie) => movie.id === Number(id));
//   res.send(result);
// };

const handleInsertMovie = (req, res) => {
  let { title, year } = req.body;
  const query = `INSERT INTO movies (title, year, created_at, updated_at) VALUES (?, ?, NOW(), NOW())`;

  connectionPool.query(query, [title, year], (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({
      message: "movie was successfully created",
      status: "succes",
      id_created: data.insertId,
    });
  });
};

const handleReadMovies = (req, res) => {
  const query = `SELECT * FROM movies`;
  connectionPool.query(query, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const movies = data.map((el) => {
      const { id, title, year, created_at, updated_at } = el;
      return {
        id,
        title,
        year,
        created_at,
        updated_at,
      };
    });
    res.json(movies);
  });
};

const handleReadMovieById = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM movies WHERE id=?`;
  connectionPool.query(query, [id], (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const movies = data.map((el) => {
      const { id, title, year, created_at, updated_at } = el;
      return {
        id,
        title,
        year,
        created_at,
        updated_at,
      };
    });
    res.json(
      movies.length != 0
        ? movies
        : {
            status: "filed",
            message: `id ${id} tidak ditemukan`,
          }
    );
  });
};

const handleUpdateMovie = (req, res) => {
  let { title, year } = req.body;
  let { id } = req.params;
  const query = `UPDATE movies SET title=?, year=?, updated_at=NOW() WHERE id=?`;
  connectionPool.query(query, [title, year, id], (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(
      data.affectedRows != 0
        ? {
            message: "movie was successfully update",
            status: "succes",
            id_updated: id,
            title,
            year,
          }
        : {
            status: "filed",
            message: `id ${id} tidak ditemukan`,
          }
    );
  });
};

const handleDeleteMovie = (req, res) => {
  let { id } = req.params;
  query = `DELETE FROM movies WHERE id= ?`;
  connectionPool.query(query, [id], (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    res.json(
      data.affectedRows != 0
        ? {
            message: "movie was successfully deleted",
            status: "succes",
            id_deleted: id,
          }
        : {
            status: "filed",
            message: `id ${id} tidak ditemukan`,
          }
    );
  });
};

module.exports = {
  // getMovieByID,
  // getMovies,
  handleInsertMovie,
  handleReadMovies,
  handleUpdateMovie,
  handleDeleteMovie,
  handleReadMovieById,
};
