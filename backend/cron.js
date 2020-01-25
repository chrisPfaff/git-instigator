const CronJob = require("cron").CronJob;
const mailer = require("./mailer.js");
require("dotenv").config();

console.log(mailer.mailOptions, mailer.transporter);

mailer.transporter.sendMail(mailOptions, function(error, info) {
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
