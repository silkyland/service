import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components";
import "moment/locale/fr";
import Login from "./components/backend/Login";
import Statistic from "./components/frontend/Statistic";
import Backend from "./components/backend";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/stat" component={Statistic} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Backend} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
