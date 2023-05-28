const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");

router.post("/create", async (req, res) => {
  const payload = req.body;
  const user = new UserModel(payload);
    const data = await user.save();
    console.log(data)
  res.status(200).send({ message: "success", data, user });
});
router.get("/home", (req, res) => {
  res.send("Welcome to the home");
});

module.exports = router;
 