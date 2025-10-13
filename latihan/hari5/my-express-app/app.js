const express = require("express");
const app = express();
const port = 3000;

const movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];


//midleware
const getMovies = (req, res) => {
  let result = "";
  movies.forEach((movie, i) => {
    result += `${i + 1} - ${movie.title} | ${movie.year}<br>`;
  });

  res.send(`<h3>List movie :</h3> <br> ${result}`);
};

app.get("/", (req, res) => {
  res.send("Hello World! xyz");
});

app.get("/movie", getMovies);

//static file
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
