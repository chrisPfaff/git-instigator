const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: process.env.EMAIL,
  to: "*",
  subject: "Sending Email using Node.js",
  text: "HI BABE"
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions
};
