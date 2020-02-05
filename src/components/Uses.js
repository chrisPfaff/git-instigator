import React from "react";
import { Link } from "react-router-dom";

import "../styles/Uses.scss";

const Uses = () => {
  return (
    <div className="Uses">
      <li className="Uses_button">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back
        </Link>
      </li>
    </div>
  );
};

export default Uses;
