import React, { useState } from "react";
import getReposFromUser from "../utils/getReposFromUser.js";
import getTimesFromRepos from "../utils/getTimesFromRepos.js";
import checkRepoDate from "../utils/checkRepoDate.js";

const Home = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    getReposFromUser(user).then(data => {
      const repos = getTimesFromRepos(data);
      checkRepoDate(repos);
    });
  };
  const handleChange = e => {
    setUser(e.target.value);
  };

  return (
    <div>
      <h1>Git Instigator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={user} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
