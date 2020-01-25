const CronJob = require("cron").CronJob;
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
  to: "cpfaff1010@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

var job = new CronJob(
  "0 3 * * *",
  function() {
    console.log("You will see this message every second");
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();
