const express = require("express");
const mailer = require("./mailer.js");
const app = express();

app.use(express.static("dist"));

app.get("/where", (req, res) => {
  console.log(mailer.transporter, mailer.mailOptions);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
