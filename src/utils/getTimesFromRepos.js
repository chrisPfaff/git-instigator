import "regenerator-runtime/runtime";

const getTimesFromRepos = async repos => {
  const [repoTime, setRepoTime] = [];
  console.log("reposs", repos);
  repos.forEach(item => {
    console.log(item);
  });
};

export default getTimesFromRepos;
