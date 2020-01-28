require("regenerator-runtime/runtime");

const checkRepoDate = repos => {
  let time = new Date();
  console.log(String(time).slice(4, 15) === "Jan 24 2020");
};

module.exports = checkRepoDate;
