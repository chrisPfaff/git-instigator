import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`https://api.github.com/users/${user}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.repos_url);
        fetch(data.repos_url)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
          });
      });
  };

  const handleChange = e => {
    setUser(e.target.value);
    console.log(user);
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

export default App;
