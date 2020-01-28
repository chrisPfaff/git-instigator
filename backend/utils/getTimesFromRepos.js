const fetch = require("node-fetch");

const getTimesFromRepos = async repos => {
  let repoList = repos.map(item => {
    return [item.updated_at.slice(0, 10), item.name, item.html_url];
  });
  return repoList;
};

module.exports = getTimesFromRepos;
