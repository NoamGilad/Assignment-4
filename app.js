const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const usersRoute = require("./routes/users");
const signupRoute = require("./routes/signup");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(usersRoute);
app.use(signupRoute.router);

app.listen(3000);
