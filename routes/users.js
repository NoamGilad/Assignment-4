const express = require("express");

const router = express.Router();

const signupData = require("./signup");

router.get("/users", (req, res, next) => {
  const users = signupData.users;
  res.render("users", { $users: users, pageTitle: "Users", path: "/users" });
});

module.exports = router;
