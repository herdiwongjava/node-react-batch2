
const { connectionPool } = require("../config/db");

const movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

const getMovies = (req, res) => {

  let { query } = req.query;
  query = query || "";

  // let result = [];
  // movies.forEach((movie, i) => {
  //   movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  //     ? (result += `${i + 1} - ${movie.title} | ${movie.year}<br>`)
  //     : (result = "<h2>Data Tidak Ditemukan</h2>");

  // });
  // res.send(result);

  //API
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredMovies.length === 0) {
    return res.status(404).json({
      success: false,
      message: "Data tidak ditemukan",
      data: [],
    });
  }

  res.json({
    success: true,
    total: filteredMovies.length,
    data: filteredMovies,
  });
};

const getMovieByID = (req, res) => {
  const { id } = req.params;
  result = movies.find((movie) => movie.id === Number(id));
  res.send(result);
};

const handleCreateMovie = (req, res) => {
    let { title, year } = req.body;
    const query = `INSERT INTO movies (title, year, created_at, updated_at) VALUES ('${title}', ${year}, NOW(), NOW())`;

    connectionPool.query(query,
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      res.json({
        'message':'movie was successfully created',
        'status': 'succes'
     });
    }
  );
};

module.exports = { 
    getMovieByID, 
    getMovies, 
    handleCreateMovie 
};
