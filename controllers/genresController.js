const { green } = require("colors");
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
const getGenre = async (req, res) => {
  try {
    // verify if genre exist

    // get id
    const id = req.params.id;

    const genre = await Genre.findById(id);

    if (!genre) {
      res.status(404).send("Genre was not found");
      return;
    }

    res.status(200).send(genre);
  } catch (error) {
    res.send(error.message);
  }
};

// POST http:://locahost:5000/api/genres  {...}
const createGenre = async (req, res) => {
  try {
    // access the request object
    // req.body --> {name: "Action"}
    const genre = new Genre({
      ...req.body,
    });

    const result = await genre.save();

    res.status(201).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// PUT http:://locahost:5000/api/genres/7  {....}
const updateGenre = async (req, res) => {
  try {
    // cechck if the genre with the provided id exists

    const id = req.params.id;

    const genre = await Genre.findById(id);

    if (!genre) {
      res.status(404).send("Genre was not found");
      return;
    }

    genre.name = req.body.name;
    const result = await genre.save();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// DELETE http:://locahost:5000/api/genres/5
const deleteGenre = async (req, res) => {
  try {
    // verify if genre with the provided ID exists
    // cechck if the genre with the provided id exists

    const id = req.params.id;

    const genre = await Genre.findById(id);

    console.log(genre);

    if (!genre) {
      res.status(404).send("Genre was not found");
      return;
    }

    // delete genre

    const result = await Genre.findByIdAndDelete(id);

    res.status(200).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
};
