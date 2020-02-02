import React, { useState, useRef } from "react";
import "../styles/Home.scss";

const Home = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const notificationRef = useRef(null);
  const [submitted, isSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    //fetch(`http://localhost:3000/user?user=${user}&email=${email}`);
    isSubmitted(!submitted);
    console.log(notificationRef.current);
    notificationRef.current.classList.add("fadeIn");
    setTimeout(() => {
      console.log("hello");
      notificationRef.current.classList.remove("fadeIn");
      notificationRef.current.classList.add("fadeOut");
    }, 3000);
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper
        laoreet ligula. Cras sollicitudin suscipit velit, id sollicitudin mi
        vehicula a. Pellentesque pellentesque tortor arcu, sit amet luctus magna
        vehicula id. Nam eget neque eros. Sed eu egestas quam. Nulla pharetra
        neque in mattis sodales. Proin maximus dolor non nunc viverra cursus.
        Nulla quis rutrum felis. Suspendisse convallis et orci at vulputate.
        Donec tristique quam a leo interdum, quis aliquet nisl tristique. Donec
        a pellentesque sem, ut ultricies mauris. Aliquam hendrerit, mi at
        tincidunt porttitor, eros nunc finibus ante, vel rhoncus elit quam vitae
        sapien. Integer a augue quis lectus bibendum cursus ut eu velit. Aenean
        vel nulla hendrerit augue commodo placerat non a lorem. Ut ut lacus sed
        mauris tincidunt dignissim accumsan non metus. Maecenas pretium porta
        nibh, eu volutpat tortor semper quis. In in laoreet magna. Donec
        vulputate venenatis diam congue sollicitudin. Cras tortor est,
        condimentum a semper sit amet, dapibus nec leo.
      </p>
      <div ref={notificationRef} id="notification" className="notification">
        <p>Success</p>
      </div>
      <div
        ref={notificationRef}
        id="notificationFail"
        className="notificationFail"
      >
        <p>Item not submitted</p>
      </div>
    </div>
  );
};

export default Home;
