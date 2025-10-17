const express = require("express");
const {
  handleInsertMovie,
  handleReadMovies,
  handleUpdateMovie,
  handleDeleteMovie,
  handleReadMovieById,
} = require("../controller/controllerMovie");
const { handleBasicAuthentication } = require("../midleware/basicAuth");
const routerMovie = express.Router();


routerMovie.post("/add",handleBasicAuthentication ,handleInsertMovie);
routerMovie.get("/view", handleReadMovies);
routerMovie.get("/view/:id", handleReadMovieById);
routerMovie.put("/change/:id", handleBasicAuthentication, handleUpdateMovie);
routerMovie.delete(
  "/remove/:id",
  handleBasicAuthentication,
  handleDeleteMovie
);

module.exports = { routerMovie };
