import "regenerator-runtime/runtime";

const getReposFromUser = async user => {
  const data = await fetch(`https://api.github.com/users/${user}`).then(res => {
    return res.json();
  });
  const repoList = await fetch(`${data.repos_url}?per_page=150`).then(res => {
    return res.json();
  });
  return repoList;
};

export default getReposFromUser;
