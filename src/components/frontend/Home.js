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
  TabPane
} from "reactstrap";
import FrontendMaster from "../layout/FrontendMaster";
class Home extends Component {
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
          <h1>สถานะการให้บริการ</h1>
          <FormGroup>
            <Input type="select" name="select" id="exampleSelect">
              <option>พื้นที่จัดการศึกษาเวียงบัว</option>
              <option>พื้นที่จัดการศึกษาแม่ริม</option>
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
                <i className="fa fa-check" /> เสร็จแล้ว
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
                <i className="fa fa-coffee" /> ระหว่างดำเนินการ
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>ทั้งหมด</h4>
                  <Table hover striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>เมื่อ</th>
                        <th>ชื่อ-สกุล</th>
                        <th>ประเภท</th>
                        <th>อุปกรณ์</th>
                        <th>สถานะ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2 นาทีที่แล้ว</td>
                        <td>ศตวรรษ อรชุนเวคิน</td>
                        <td>นักศึกษา</td>
                        <td>iPhone 8 Red 256 GB ครบกล่อง</td>
                        <td>
                          <div className="btn btn-warning btn-block">
                            ระหว่างดำเนินการ
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>6 นาทีที่แล้ว</td>
                        <td>นายอำนาจ โกวรรณ</td>
                        <td>อาจารย์</td>
                        <td>
                          Notebook Lenovo Thinkpad SSD 256 Ram 8 GB + สายชาร์จ
                        </td>

                        <td>
                          <div className="btn btn-success btn-block">
                            เสร็จแล้ว
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>2 วันที่แล้ว</td>
                        <td>บัณฑิต นันทะเทศ</td>
                        <td>บุคลกากร</td>
                        <td>Macbook Pro 2014 Ram 8 GB SSD 256GB + กระเป๋า</td>
                        <td>
                          <div className="btn btn-success btn-block">
                            เสร็จแล้ว
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>4 วันที่แล้ว</td>
                        <td>กุลชาติ ปัญญาดี</td>
                        <td>บุคลกากร</td>
                        <td>
                          Microsoft Surface Pro 2016 Ram 8GB, SSD 128 with Cover
                          Keyboard
                        </td>
                        <td>
                          <div className="btn btn-success btn-block">
                            เสร็จแล้ว
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                  </Pagination>
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
                <Col sm="12">
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

export default Home;
