const nodemailer = require("nodemailer");
const CronJob = require("cron").CronJob;
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = email => {
  return {
    from: process.env.EMAIL,
    to: email,
    subject: "Sending Email using Node.js",
    text: "HI BABE"
  };
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions
};
