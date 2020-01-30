const CronJob = require("cron").CronJob;
const mailer = require("./mailer.js");
const User = require("./model/User.js");
const getReposFromUser = require("./utils/getTimesFromRepos.js");
const getTimesFromRepos = require("./utils/getTimesFromRepos.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

require("dotenv").config();

//! how to grab data from query
// let x = User.find({}, function(err, user) {
//   if (err) return handleError(err);
//   return user;
// });

// x.exec((err, user) => {
//   console.log(user[0].name);
// });
//!cron job time
//"30 18 * * *"

const EmailJob = new CronJob(
  "20 * * * * *",
  function() {
    console.log("email starting");
    // find.exec().then(data => {
    //   for (const key in data) {
    //     console.log(data[key].name);
    //     mailer.transporter.sendMail(
    //       mailer.mailOptions(data[key].email, data[key].name),
    //       function(error, info) {
    //         if (error) {
    //           console.log(error);
    //         } else {
    //           console.log("Email sent: " + info.response);
    //         }
    //       }
    //     );
    //   }
    // });
  },
  null,
  true,
  "America/Chicago"
);

module.exports = EmailJob;
