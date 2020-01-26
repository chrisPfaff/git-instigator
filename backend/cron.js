const CronJob = require("cron").CronJob;
const mailer = require("./mailer.js");
const User = require("./model/User.js");
require("dotenv").config();
const tzOffset = require("tz-offset");

tzOffset.offsetOf("America/Sao_Paulo");
tzOffset.removeOffset(new Date());
tzOffset.timeAt(new Date(), "America/Chicago");

console.log(mailer.mailOptions, mailer.transporter);

// mailer.transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

const job = new CronJob(
  "0 51 3 * * *",
  function() {
    User.find({}, function(err, user) {
      if (err) return handleError(err);
      console.log(user);
    });
  },
  null,
  true,
  "America/Los_Angeles"
);

module.exports = job;
