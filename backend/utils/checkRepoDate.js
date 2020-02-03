const checkRepoDate = repoDate => {
  let todaysDate = new Date();
  console.log(todaysDate.toISOString().slice(0, 10), repoDate.slice(0, 10));
  if (todaysDate.toISOString().slice(0, 10) == repoDate.slice(4, 15)) {
    return true;
  } else {
    return false;
  }
};

module.exports = checkRepoDate;
