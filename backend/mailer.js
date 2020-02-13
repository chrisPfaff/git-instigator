const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

let mailOptions = ({ name, email }) => {
  return {
    from: process.env.EMAIL,
    to: email,
    subject: `${name} has a message from Git Instigator`,
    text: `Hey ${name}, you are not working hard enough, you haven't committed anything all day`
  };
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions
};
