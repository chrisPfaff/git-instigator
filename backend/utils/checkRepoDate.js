const moment = require("moment");

const checkRepoDate = repoDate => {
  let todaysDate = moment()
    .format()
    .slice(0, 10);
  if (todaysDate == repoDate.slice(0, 10)) {
    return true;
  } else {
    return false;
  }
};

module.exports = checkRepoDate;
