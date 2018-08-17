import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import { Container } from "reactstrap";
import Aside from "./Aside";
class BackendMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>{this.props.children}</Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default BackendMaster;
