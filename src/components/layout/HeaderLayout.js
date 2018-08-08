import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class HeaderLayout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <NavbarBrand href="/">
          <img
            src="https://www.cmru.ac.th/assets/images/cmru-logo-min.png"
            alt="มหาวิทยาลัยราชภัฏเชียงใหม่"
            style={{ width: 32 }}
          />{" "}
          ระบบฐานข้อมูลซ่อมบำรุง
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav pills className="ml-auto">
            <NavItem>
              <NavLink href="#" active>
                <i className="fa fa-home" /> หน้าแรก
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-pie-chart" /> สถิติการใช้งาน
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-pencil" /> ประเมิน
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </React.Fragment>
    );
  }
}

HeaderLayout.propTypes = propTypes;
HeaderLayout.defaultProps = defaultProps;

export default HeaderLayout;
