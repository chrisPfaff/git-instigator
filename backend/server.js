const express = require("express");
require("dotenv").config();
require("./cronJobDatabase.js");
const mongoose = require("mongoose");
const User = require("./model/User.js");
const db = mongoose.connection;
const url = process.env.MONGO_URI;
const app = express();
const port = 3000;

app.use(express.static("dist"));

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connection open");
});

app.get("/user", (req, res) => {
  let user = new User({
    name: req.query.user,
    email: req.query.email
  });
  user.save(function(err, user) {
    if (err) res.sendStatus(400);
    console.log("user created");
    res.sendStatus(200);
  });
});

app.listen(port, () => console.log("Listening on port 3000!"));
