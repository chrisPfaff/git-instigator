const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = (email, name) => {
  return {
    from: process.env.EMAIL,
    to: email,
    subject: `${name} has a message from Git Instigator`,
    text: `You haven't committed anything all day get to work ${name}`
  };
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions
};
