import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

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
