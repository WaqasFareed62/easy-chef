const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/routes-controller");

app.use("/api", router);
mongoose
  .connect("mongodb://localhost:27017/easychef")
  .then(console.log("successfully connected to local db"))
  .catch((error) => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("server running on port 5000");
});
