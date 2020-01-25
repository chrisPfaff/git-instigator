const express = require("express");
const mailer = require("./mailer.js");
require("dotenv").config();
const mongo = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

const app = express();

app.use(express.static("dist"));

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/where", (req, res) => {
  mailer.transporter.sendMail(mailer.mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("sent");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
