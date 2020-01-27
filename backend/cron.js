const CronJob = require("cron").CronJob;
const mailer = require("./mailer.js");
const User = require("./model/User.js");
require("dotenv").config();

//console.log(mailer.mailOptions, mailer.transporter);

// mailer.transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

const job = new CronJob(
  "30 18 * * *",
  function() {
    User.find({}, function(err, user) {
      if (err) return handleError(err);
      console.log(user);
    });
  },
  null,
  true,
  "America/Chicago"
);

job.start();

module.exports = job;
