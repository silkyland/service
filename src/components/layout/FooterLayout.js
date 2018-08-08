import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class FooterLayout extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>ระบบฐานข้อมูลซ่อมบำรุง พัฒนาโดย นายบัณฑิต นันทะเทศ</span>
        <span className="ml-auto">
          &copy;{" "}
          <a href="https://digital.cmru.ac.th">สำนักดิจิทัลเพื่อการศึกษา</a>{" "}
          มหาวิทยาลัยราชภัฏเชียงใหม่.
        </span>
      </React.Fragment>
    );
  }
}

FooterLayout.propTypes = propTypes;
FooterLayout.defaultProps = defaultProps;

export default FooterLayout;
