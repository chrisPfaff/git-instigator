const schedule = require("node-schedule");
const mailer = require("./mailer.js");
const User = require("./model/User.js");
const getReposFromUser = require("./utils/getTimesFromRepos.js");
const getTimesFromRepos = require("./utils/getTimesFromRepos.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

// const DatabaseJob = new CronJob(
//   "10 * * * * *",
//   function() {
//     User.find({}, function(err, user) {
//       if (err) return handleError(err);
//       return DatabaseJob;
//     });
//   },
//   null,
//   true,
//   "America/Chicago"
// );

const DatabaseJob = schedule.scheduleJob("10 * * * * *", function() {
  console.log("in");
  User.find({}, function(err, user) {
    if (err) return handleError(err);
    console.log(user);
    return user;
  });
});

module.exports = DatabaseJob;
