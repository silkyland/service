import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/stat" component={Statistic} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Backend} />
          <Route component={Page404} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
