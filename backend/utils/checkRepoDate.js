const moment = require("moment");

const checkRepoDate = repoDate => {
  //console.log("repodate", repoDate);
  let todaysDate = moment()
    .utc()
    .format()
    .slice(0, 10);
  //console.log("repodate", repoDate.slice(0, 10));
  //console.log("real data", todaysDate);
  if (todaysDate === repoDate.slice(0, 10)) {
    return true;
  }
};

module.exports = checkRepoDate;
