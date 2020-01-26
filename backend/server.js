const express = require("express");
require("dotenv").config();
const job = require("./cron.js");
const mongoose = require("mongoose");
const User = require("./model/User.js");
const db = mongoose.connection;
const url = process.env.MONGO_URI;
const app = express();

//serve static parcel app
app.use(express.static("dist"));

//connect to mongoose
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

//open database
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connection open");
});

//test user
// let user = new User({
//   name: "chris",
//   email: "10@gmail.com"
// });

//!save user function
// user.save(function(err, user) {
//   if (err) return console.error(err);
//   console.log("user created");
// });

//!user find
// User.find({}, function(err, user) {
//   if (err) return handleError(err);
//   console.log(user);
// });

//!mailer
// mailer.transporter.sendMail(mailer.mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
// res.send("sent");

app.get("/user", (req, res) => {
  console.log(req.query.user, req.query.email);
  let user = new User({
    name: req.query.user,
    email: req.query.email
  });

  user.save(function(err, user) {
    if (err) return console.error(err);
    console.log("user created");
  });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
