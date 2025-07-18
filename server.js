require("dotenv").config();
//const colors = require("colors");
const express = require("express");

const connectDb = require("./config/index");

const genresRoutes = require("./routes/genresRoutes");

const app = express();
connectDb();

app.use("/api/genres", genresRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode...`
  );
});
