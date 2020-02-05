import React from "react";
import { Link } from "react-router-dom";
import {
  DiJavascript1,
  DiLess,
  DiReact,
  DiMongodb,
  DiGitCompare,
  DiGithubAlt,
  DiNodejs,
  DiNodejsSmall
} from "react-icons/di";

import "../styles/Uses.scss";

const Uses = () => {
  return (
    <div className="Uses">
      <li className="Uses_button">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back
        </Link>
      </li>
      <div className="Uses_title">
        <h1>A collection of the tech used on this App</h1>
      </div>
      <div className="Uses_content">
        <ul className="Uses_description">
          <DiJavascript1 />
          <p>Javascript</p>
        </ul>
        <ul className="Uses_description">
          <DiLess />
          <p>LESS</p>
        </ul>
        <ul className="Uses_description">
          <DiReact />
          <p>React</p>
        </ul>
        <ul className="Uses_description">
          <DiMongodb />
          <p>Mongodb</p>
        </ul>
        <ul className="Uses_description">
          <DiGitCompare />
          <p>Parcel</p>
        </ul>
        <ul className="Uses_description">
          <DiGithubAlt />
          <p>Githubs API</p>
        </ul>
        <ul className="Uses_description">
          <DiNodejs />
          <p>Node</p>
        </ul>
        <ul className="Uses_description">
          <DiNodejsSmall />
          <p>Node_cron, momento, nodemailer</p>
        </ul>
      </div>
    </div>
  );
};

export default Uses;
