const express = require("express");
const {
  getMovies,
  getMovieByID,
  handleCreateMovie,
} = require("../controllers/movieController");
const router = express.Router();


router.get("/movie", getMovies); //localhost:3000/api/movie
router.get("/movie/:id", getMovieByID); //localhost:3000/api/movie/2

router.post("/add", handleCreateMovie);


module.exports = {router}