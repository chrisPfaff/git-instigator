const schedule = require("node-schedule");
const mailer = require("./mailer.js");
const User = require("./model/User.js");
const getReposFromUser = require("./utils/getTimesFromRepos.js");
const getTimesFromRepos = require("./utils/getTimesFromRepos.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

const DatabaseJob = schedule.scheduleJob("10 * * * * *", function() {
  console.log(getReposFromUser, getTimesFromRepos, checkRepoDate);
  let find = User.find({}, function(err, user) {
    if (err) return handleError(err);
    return user;
  });
  find.exec().then(data => {
    for (const key in data) {
      console.log(data[key].name);
      mailer.transporter.sendMail(
        mailer.mailOptions(data[key].email, data[key].name),
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
});

module.exports = DatabaseJob;
