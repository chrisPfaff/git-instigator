const CronJob = require("cron").CronJob;
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

module.exports.DatabaseJob = function() {
  const myFnEventEmitter = new (require("events").EventEmitter)();
  let job = new CronJob(
    "10 * * * * *",
    function() {
      User.find({}, function(err, user) {
        if (err) return handleError(err);
        console.log(user);
        return user;
      });
    },
    null,
    true,
    "America/Chicago",
    myFnEventEmitter.emit("started", this.DatabaseJob)
  );
  return myFnEventEmitter;
};
