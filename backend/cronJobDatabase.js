const schedule = require("node-schedule");
const mailer = require("./mailer.js");
const mongoose = require("mongoose");
const db = mongoose.connection;
const User = require("./model/User.js");
const UserEmail = require("./model/UserEmail.js");
const getReposFromUsers = require("./utils/getReposFromUsers.js");
const checkRepoDate = require("./utils/checkRepoDate.js");

const FindJob = schedule.scheduleJob("20 * * * * *", function() {
  //! delete collection to add new users
  db.dropCollection("useremails", function(err, result) {
    if (err) {
      console.log("error delete collection");
    } else {
      console.log("delete collection success");
    }
  });

  //! find users
  let find = User.find({}, function(err, user) {
    if (err) return handleError(err);
    return user;
  });

  //! iterate over users found in db
  find.exec().then(data => {
    for (const key in data) {
      let user = data[key].email;
      let repoList = getReposFromUsers(data[key].name);
      repoList.then(data => {
        data.forEach((item, index, arr) => {
          //! need to figure out a way to get falsey values to allow and if statement
          console.log(checkRepoDate(item.updated_at) === false);
          console.log(index === arr.length - 1);
          if (checkRepoDate(item.updated_at)) {
            throw new Error("User updated today");
          } else if (
            checkRepoDate(item.updated_at) === false &&
            index === arr.length - 1
          ) {
            console.log("email created");
            let emailContents = new UserEmail({
              name: item.owner.login,
              email: user
            });
            emailContents.save(function(err, emailContents) {
              if (err) throw err;
              console.log("user email created");
            });
          }
        });
      });
    }
  });
});

const EmailJob = schedule.scheduleJob("30 * * * * *", function() {
  console.log("inside emailjob");
  //! find users who didn't push to github today
  let find = UserEmail.find({}, function(err, UserEmail) {
    if (err) return handleError(err);
    return UserEmail;
  });
  //! send those users an email
  find.exec().then(data => {
    for (const key in data) {
      let githubUser = data[key];
      mailer.transporter.sendMail(mailer.mailOptions(githubUser), function(
        error,
        info
      ) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  });
});

module.exports = EmailJob;
