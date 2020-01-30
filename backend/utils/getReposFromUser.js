const fetch = require("node-fetch");

const getReposFromUser = async user => {
  const data = await fetch(`https://api.github.com/users/${user}`).then(res => {
    console.log("inside get repos", res.json());
    return res.json();
  });
  const repoList = await fetch(`${data.repos_url}?per_page=150`).then(res => {
    return res.json();
  });
  return repoList;
};

module.exports = getReposFromUser;
