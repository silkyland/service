import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import BackendMaster from "../layout/backend/BackendMaster";
import Dashboard from "./Dashboard";

class Backend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BackendMaster>
        <Switch>
          <Route
            path="/admin/dashboard"
            name="Dashboard"
            component={Dashboard}
          />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BackendMaster>
    );
  }
}

export default Backend;
