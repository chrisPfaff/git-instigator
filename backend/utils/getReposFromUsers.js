const axios = require("axios").default;

const getReposFromUsers = async user => {
  let data = await axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
  let repoList = await axios
    .get(`${data.repos_url}?per_page=150`)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return repoList;
};

module.exports = getReposFromUsers;
