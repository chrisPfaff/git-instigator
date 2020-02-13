const moment = require("moment");

const checkRepoDate = repoDate => {
  let todaysDate = moment()
    .utc()
    .format()
    .slice(0, 10);
  //console.log(repoDate.slice(0, 10) === todaysDate);
  if (todaysDate === repoDate.slice(0, 10)) {
    return true;
  }
};

module.exports = checkRepoDate;
