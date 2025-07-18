const express = require("express");
const router = express.Router();
const {
  getGenres,
  getGenre,
  createGenre,
  deleteGenre,
  updateGenre,
} = require("../controllers/genresController");

router.get("/", getGenres);

module.exports = roapi;
