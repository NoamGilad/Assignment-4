const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("signup", { pageTitle: "Signup", path: "/" });
});

router.post("/", (req, res, next) => {
  users.push(req.body);
  res.redirect("/users");
});

module.exports = {
  router,
  users,
};
