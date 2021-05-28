import React from "react";
import "assets/css/style.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default App;
