const express = require("express");
const router = express.Router();
const User = require("../models/User");
const app = express();
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    [
      body("name", "Enter a valid name").isLength({ min: 3 }),
      body("email", "Enter a valid email").isEmail(),
      body("password", "Enter a valid password").isLength({ min: 5 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "user already exists" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error has been occoured!");
    }
  }
);

router.post(
  "/login",
  [
    [
      body("email", "Enter a valid email").isEmail(),
      body("password", "Enter a valid password").exists(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let sucess = false;
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ error: "user not exists!" });
      } else {
        let password = user.password;
        let email = user.email;
        if (password !== req.body.password) {
          sucess = false;
        } else {
          sucess = true;
        }
        return res.status(200).json({ Message: "Welcome", sucess, email });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error has been occoured!");
    }
  }
);
module.exports = router;
