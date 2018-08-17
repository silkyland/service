import classnames from "classnames";
import React, { Component } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane,
  CardBody
} from "reactstrap";
import FrontendMaster from "../layout/FrontendMaster";
class Statistic extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { activeTab: "1" };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <FrontendMaster>
        <div style={{ paddingTop: 10 }}>
          <h1>สถิติการใช้งาน</h1>
          <FormGroup>
            <Input type="select" name="select" id="exampleSelect">
              <option>ปีการศึกษา 2560</option>
              <option>ปีการศึกษา 2561</option>
            </Input>
          </FormGroup>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                <i className="fa fa-list" /> ทั้งหมด
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === "2"
                })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                <i className="fa fa-university" /> พื้นที่จัดการศึกษาเวียงบัว
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === "3"
                })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                <i className="fa fa-street-view" /> พื้นที่จัดการศึกษาแม่ริม
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>แสดงสถิติการใช้งานทั้งหมด ปีการศึกษา 2560</h4>
                </Col>
                <Col sm="4">
                  <Card>
                    <CardBody>
                      <img
                        src={require("../../assets/images/all_fake_chart.png")}
                        alt=""
                        className="img-fluid"
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="8">
                  <Card>
                    <CardBody>
                      <img
                        src={require("../../assets/images/fake_bar_chart.png")}
                        alt=""
                        className="img-fluid"
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="6">
                  <h4>Tab 3 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </FrontendMaster>
    );
  }
}

export default Statistic;
