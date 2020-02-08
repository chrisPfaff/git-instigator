const moment = require("moment");

//! change back to true and false
const checkRepoDate = repoDate => {
  let todaysDate = moment()
    .utc()
    .format()
    .slice(0, 10);
  console.log(todaysDate, repoDate.slice(0, 10));
  if (todaysDate == repoDate.slice(0, 10)) {
    return false;
  } else {
    return true;
  }
};

module.exports = checkRepoDate;
