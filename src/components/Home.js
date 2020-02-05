import React, { useState, useRef } from "react";
import "../styles/Home.scss";

const Home = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const notificationRef = useRef(null);
  const notificationRefFail = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    fetch(`http://localhost:3000/user?user=${user}&email=${email}`)
      .then(function(response) {
        if (!response.ok) {
          notificationRefFail.current.classList.add("fadeIn");
          console.log("erorrrs");
          setTimeout(() => {
            notificationRefFail.current.classList.remove("fadeIn");
            notificationRefFail.current.classList.add("fadeOut");
          });
        }
        return response;
      })
      .then(function(response) {
        if (response.ok) {
          console.log(notificationRef.current);
          notificationRef.current.classList.add("fadeIn");
          setTimeout(() => {
            notificationRef.current.classList.remove("fadeIn");
            notificationRef.current.classList.add("fadeOut");
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    setUser("");
    setEmail("");
  };
  const handleChange = e => {
    setUser(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  return (
    <div className="Home">
      <h1 className="Home_title">Git Instigator</h1>
      <h2 className="Home_description">A web app that keeps you motivated</h2>
      <form className="Home_form" onSubmit={handleSubmit}>
        <label>
          GitHub Handle :
          <input type="text" value={user} onChange={handleChange} />
        </label>
        <label>
          Email :
          <input type="email" value={email} onChange={handleChangeEmail} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p className="Home_text">
        Welcome to my App. Enter your Github handle and email and get to work.
        This app will check your Github daily using their API to see if you have
        committed anything today. If not it will send you and email that will
        tell you to get work.
      </p>
      <div ref={notificationRef} id="notification" className="notification">
        <p>Success</p>
      </div>
      <div
        ref={notificationRefFail}
        id="notificationFail"
        className="notificationFail"
      >
        <p>Item not submitted</p>
      </div>
    </div>
  );
};

export default Home;
