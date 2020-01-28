const CronJob = require("cron").CronJob;
const mailer = require("./mailer.js");
const User = require("./model/User.js");
const getReposFromUser = require("./utils/getTimesFromRepos.js");
const getTimesFromRepos = require("./utils/getTimesFromRepos.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

require("dotenv").config();

//console.log(mailer.mailOptions());

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

// const DatabaseJob = new CronJob(
//   "0/20 0 0 * * *",
//   function() {
//     let find = User.find({}, function(err, user) {
//       if (err) return handleError(err);
//       return user;
//     });
//     find.exec().then(data => {
//       for (const key in data) {
//         //console.log(data[key].email);
//         mailer.transporter.sendMail(
//           mailer.mailOptions(data[key].email),
//           function(error, info) {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log("Email sent: " + info.response);
//             }
//           }
//         );
//       }
//     });
//   },
//   null,
//   true,
//   "America/Chicago"
// );

const EmailJob = new CronJob(
  "* * * * * *",
  function() {
    console.log("hello");
    let find = User.find({}, function(err, user) {
      if (err) return handleError(err);
      return user;
    });
    find.exec().then(data => {
      for (const key in data) {
        //console.log(data[key].email);
        mailer.transporter.sendMail(
          mailer.mailOptions(data[key].email),
          function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          }
        );
      }
    });
  },
  null,
  true,
  "America/Chicago"
);

// DatabaseJob.start();
EmailJob.start();

module.exports = {
  EmailJob: EmailJob
};
