const CronJob = require("cron").CronJob;
const mailer = require("./mailer.js");
const User = require("./model/User.js");
const getReposFromUser = require("./utils/getTimesFromRepos.js");
const getTimesFromRepos = require("./utils/getTimesFromRepos.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

const DatabaseJob = new CronJob(
  "10 * * * * *",
  function() {
    console.log("database starting");
    let find = User.find({}, function(err, user) {
      if (err) return handleError(err);
      console.log("user", user);
      return user;
    });
  },
  null,
  true,
  "America/Chicago"
);

DatabaseJob.start();
