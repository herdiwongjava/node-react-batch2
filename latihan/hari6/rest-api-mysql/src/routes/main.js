const express = require("express");
const {
  // getMovies,
  // getMovieByID,
  handleInsertMovie,
  handleReadMovies,
  handleUpdateMovie,
  handleDeleteMovie,
  handleReadMovieById,
} = require("../controllers/movieController");
const router = express.Router();


// router.get("/movie", getMovies); //localhost:3000/api/movie
// router.get("/movie/:id", getMovieByID); //localhost:3000/api/movie/2

router.post("/add", handleInsertMovie);
router.get("/view", handleReadMovies);
router.get("/view/:id", handleReadMovieById);
router.put("/change/:id", handleUpdateMovie);
router.delete("/remove/:id", handleDeleteMovie);

module.exports = {router}