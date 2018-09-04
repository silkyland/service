import { AppFooter } from "@coreui/react";
import React, { Component } from "react";
import { Container, Navbar } from "reactstrap";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

class FrontendMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Navbar color="dark" expand="md">
          <Container fluid>
            <HeaderLayout />
          </Container>
        </Navbar>
        <div className="app-body">
          <main className="main">
            <Container fluid>{this.props.children}</Container>
          </main>
        </div>
        <AppFooter>
          <FooterLayout />
        </AppFooter>
      </div>
    );
  }
}

export default FrontendMaster;
