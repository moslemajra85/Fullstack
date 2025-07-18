const mongoose = require("mongoose");

// shape Of Document
const genreSchema = new mongoose.Schema({
  name: String,
 });

// Model
Genre = mongoose.model("Genre", genreSchema);

// export the model
module.exports = Genre;
