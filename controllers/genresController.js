const Genre = require("../models/genre");

//  fecth all genres from database
// GET http:://locahost:5000/api/genres
const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).send(genres);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};




// GET http:://locahost:5000/api/genres/4
const getGenre = async (req, res) => {};

// POST http:://locahost:5000/api/genres  {...}
const createGenre = async (req, res) => {};

// PUT http:://locahost:5000/api/genres/7  {....}
const updateGenre = async (req, res) => {};

// DELETE http:://locahost:5000/api/genres/5
const deleteGenre = async (req, res) => {};

module.exports = {
  getGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
};
