require("dotenv").config();
//const colors = require("colors");
const express = require("express");

const connectDb = require("./config/index");

const genresRoutes = require("./routes/genresRoutes");
const customersRoutes  = require('./routes/customerRoutes')

const app = express();

app.use(express.json());
connectDb();

app.use("/api/genres", genresRoutes);
app.use("/api/customers", customersRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode...`
  );
});
