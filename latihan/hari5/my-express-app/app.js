const express = require("express");
const app = express();
const port = 3000;

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

//root
app.get("/", (req, res) => {
  res.send("Hello World! xyz");
});

app.get("/movie", getMovies);
app.get("/movie/:id", getMovieByID);

//MIDLEWARE
const logMiddleware = (req, res, next) => {
  console.log("Ini dari middleware log...");
  next();
};

const getText = (req, res) => {
  res.status(200).json({ text: "ini text setelah next" });
};
app.get("/midleware", logMiddleware, getText);

//MIDLEWARE PARAMETER
const tokenCheck = (req, res, next) => {
  let { token } = req.query;

  if (token !== "12345") {
    res.status(400).send("Token tidak tersedia atau salah");
  } else {
    next();
  }
};
app.get("/midleware_token", tokenCheck, getMovies);

//MIDLEWARE PARAMETER AUTH BASIC
const basicAuth = (req, res, next) => {
  let authheader = req.headers.authorization;

  if (!authheader) {
    let err = "You are not authenticated!";
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 404;
    return next(err);
  }

  let auth = new Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  let user = auth[0];
  let pass = auth[1];

  console.log(auth)

  if (user == "admin" && pass == "admin") {
    //if authorized user
    next();
  } else {
    let err = "You're not authenticated!";
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 404;
    return next(err);
  }
};
app.get("/midleware_auth", basicAuth, getMovies);

//static file
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
