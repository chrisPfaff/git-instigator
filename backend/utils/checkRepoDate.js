const moment = require("moment");

const checkRepoDate = repoDate => {
  let todaysDate = moment()
    .utc()
    .format()
    .slice(0, 10);
  //console.log(todaysDate, repoDate.slice(0, 10));
  if (todaysDate === repoDate.slice(0, 10)) {
    return true;
  }
};

module.exports = checkRepoDate;
