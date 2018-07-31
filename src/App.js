import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components";
import "./App.css";
import "moment/locale/fr";
import FrontendMaster from "./components/layout/frontend.master";

class App extends Component {
  render() {
    return (
      <FrontendMaster>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </FrontendMaster>
    );
  }
}

export default App;
