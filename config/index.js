const mongoose = require("mongoose");
require("dotenv").config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully Connect To MongoDB...");
  } catch (error) {
    console.error("We could not connect to MongoDB...", error);
  }
}

module.exports = connectDb;
