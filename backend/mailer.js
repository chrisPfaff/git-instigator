const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = ({ name, email, repo }) => {
  return {
    from: process.env.EMAIL,
    to: email,
    subject: `${name} has a message from Git Instigator`,
    text: `Good job ${name}, you are killing it by working on ${repo} keep going`
  };
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions
};
