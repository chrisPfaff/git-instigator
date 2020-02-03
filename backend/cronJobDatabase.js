const schedule = require("node-schedule");
const mailer = require("./mailer.js");
const User = require("./model/User.js");
const getReposFromUsers = require("./utils/getReposFromUsers.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

//! best way to pass data to multiple jobs
let repoList;

const FindJob = schedule.scheduleJob("20 * * * * *", function() {
  let find = User.find({}, function(err, user) {
    if (err) return handleError(err);
    return user;
  });
  find.exec().then(data => {
    for (const key in data) {
      let name = data[key].name;
      repoList = getReposFromUsers(data[key].name);
      repoList.then(data => {
        data.forEach(item => {
          console.log(checkRepoDate(item.updated_at));
        });
      });
    }
  });
});

// const EmailJob = schedule.scheduleJob("30 * * * * *", function() {
//   repoList.then(data => {
//     console.log(data);
//   });
// repoList.then(data => {
//   console.log(data);
// });
// let find = User.find({}, function(err, user) {
//   if (err) return handleError(err);
//   return user;
// });
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
// });

//module.exports = EmailJob;
