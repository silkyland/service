import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./components";
import "moment/locale/fr";
import Login from "./components/backend/Login";
import Statistic from "./components/frontend/Statistic";
import Backend from "./components/backend";
import Page404 from "./components/layout/Page404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stat" component={Statistic} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Backend} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
