import "regenerator-runtime/runtime";

const getTimesFromRepos = async repos => {
  const [repoTime, setRepoTime] = [];

  let x = repos.map(item => {
    console.log(item);
    return [item.updated_at, item.name, item.html_url];
  });
  console.log("repos mapped", x);
};

export default getTimesFromRepos;
