const checkRepoDate = repoDate => {
  let todaysDate = new Date();
  if (todaysDate.toISOString().slice(0, 10) == repoDate.slice(0, 10)) {
    return true;
  } else {
    return false;
  }
};

module.exports = checkRepoDate;
