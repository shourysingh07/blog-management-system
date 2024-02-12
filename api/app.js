require("dotenv").config();
const cors = require("cors");
const express = require("express");
const db = require("./src/index");
const app = express();

const routes = require("./src/routers/baseRoutes");

//Cross Origin Resource Sharing
app.use(cors());

app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));
app.use("/", routes);

//if the request reaches here its an error
app.use((req, res, next) => {
  const err = new Error("Endpoint missing");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    success: false,
    code: 411,
    message: error.message,
    response: null,
  });
});

const PORT = process.env.PORT || 9000;

db.sequelize
  .sync()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err);
  })
