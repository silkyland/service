import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

class FrontendMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header id="master-component-header">
            <div className="logo">
              <Link to="/viangbua">
                <img
                  src="https://www.cmru.ac.th/assets/images/cmru-logo-min.png"
                  alt=""
                  style={{ width: 32 }}
                />{" "}
                ระบบฐานข้อมูลซ่อมบำรุง
              </Link>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px", float: "right" }}
            >
              <Menu.Item key="1">
                <Link to="/" title="sawadee">
                  <Icon type="home" />
                  หน้าแรก
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/" title="sawadee">
                  <Icon type="pie-chart" />
                  สถิติการใช้งาน
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/" title="dashboard">
                  <Icon type="form" />
                  ประเมิน
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px", background: "#fff" }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; ระบบฐานข้อมูลซ่อมบำรุง พัฒนาโดย นายบัณฑิต นันทะเทศ
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default FrontendMaster;
