const express = require("express");
const mailer = require("./mailer.js");
const app = express();

app.use(express.static("dist"));

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
