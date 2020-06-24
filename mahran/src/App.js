import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeWithStore from "./Day4/Home";
import Register from "./Day4/components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <HomeWithStore />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
