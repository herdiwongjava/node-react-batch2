const express = require("express");
const {
  handleInsertMovie,
  handleReadMovies,
  handleUpdateMovie,
  handleDeleteMovie,
  handleReadMovieById,
} = require("../controller/controler");
const { handleBasicAuthentication } = require("../midleware/basicAuth");
const router = express.Router();


router.post("/add",handleBasicAuthentication ,handleInsertMovie);
router.get("/view", handleReadMovies);
router.get("/view/:id", handleReadMovieById);
router.put("/change/:id",handleBasicAuthentication, handleUpdateMovie);
router.delete("/remove/:id",handleBasicAuthentication, handleDeleteMovie);

module.exports = { router };
