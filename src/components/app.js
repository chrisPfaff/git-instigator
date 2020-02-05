import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Uses from "./Uses.js";
import Home from "./Home.js";

import "../styles/App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/uses">
            <Uses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
