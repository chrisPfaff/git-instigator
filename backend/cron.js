const CronJob = require("cron").CronJob;
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(transport[, defaults])

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
