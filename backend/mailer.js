const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "gitinstigator@yahoo.com",
    pass: "*"
  }
});

let mailOptions = {
  from: "gitinstigator@yahoo.com",
  to: "*",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions
};
