import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Alert
} from "reactstrap";
import { Dots } from "react-activity";
import swal from "sweetalert2";
import { Query } from "react-apollo";
import { GET_OPERATING_SYSTEMS } from "../../../query/operatingSystem";

class OperatingSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      input: {
        id: "",
        name: "",
        version: "",
        build: "",
        year: new Date().getFullYear(),
        comment: ""
      },
      button: {
        color: "primary",
        size: "sm"
      }
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.onInputChangeHander = this.onInputChangeHander.bind(this);
  }

  toggleForm() {
    let oldState = this.state.button;
    oldState["color"] = !this.state.isOpen ? "danger" : "primary";
    this.setState({ button: oldState, isOpen: !this.state.isOpen });
  }

  onInputChangeHander(e) {
    let oldInput = this.state.input;
    oldInput[e.target.name] = e.target.value;
    this.setState({ input: oldInput });
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <i className="fa fa-cubes" /> ระบบปฏิบัติการ
            <Button
              className="float-right"
              {...this.state.button}
              onClick={() => this.toggleForm()}
            >
              {!this.state.isOpen ? (
                <span>
                  <i className="fa fa-plus" /> เพิ่ม{" "}
                </span>
              ) : (
                <span>
                  <i className="fa fa-times" /> ปิด
                </span>
              )}
            </Button>
          </CardHeader>
          {this.state.isOpen ? (
            <CardBody>
              <h4>โปรดกรอกข้อมูลให้ครบถ้วน</h4>
              <Form>
                <FormGroup>
                  <Label>
                    ชื่อระบบปฏิบัติการ :<span className="text-danger"> *</span>
                  </Label>
                  <Input
                    type="text"
                    required
                    name="name"
                    placeholder="กรอกระบบปฏิบัติการ"
                    onChange={this.onInputChangeHander}
                    value={this.state.input.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>เวอร์ชั่น: </Label>
                  <Input
                    type="text"
                    name="version"
                    placeholder="กรอกเวอร์ชั่น"
                    onChange={this.onInputChangeHander}
                    value={this.state.input.version}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>หมายเลขบิวด์ :</Label>
                  <Input
                    type="text"
                    name="build"
                    placeholder="กรอกหมายเลขบิวต์"
                    onChange={this.onInputChangeHander}
                    value={this.state.input.build}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>ปี :</Label>
                  <Input
                    type="number"
                    name="year"
                    maxLength={4}
                    placeholder="กรอกหมายเลขบิวต์"
                    onChange={this.onInputChangeHander}
                    value={this.state.input.year}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>หมายเหตุ :</Label>
                  <Input
                    type="text"
                    name="comment"
                    placeholder="กรอกหมายเหตุ"
                    onChange={this.onInputChangeHander}
                    value={this.state.input.comment}
                  />
                </FormGroup>
                <p className="text-danger">* หมายถึง จำเป็นต้องกรอกข้อมูล</p>
                <Button color="primary">
                  <i className="fa fa-save" /> บันทึก
                </Button>
              </Form>
            </CardBody>
          ) : null}
          <Query query={GET_OPERATING_SYSTEMS}>
            {({ loading, error, data }) => {
              if (loading) return <Dots />;
              if (error)
                return (
                  <CardBody>
                    <Alert color="danger">
                      <h4>ผิดพลาด !</h4> <p>{error.message}</p>
                    </Alert>
                  </CardBody>
                );
              return (
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ชื่อ</th>
                      <th>เวอร์ชั่น</th>
                      <th>บิวต์</th>
                      <th>ปี</th>
                      <th>หมายเหตุ</th>
                      <th>จัดการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((os, index) => (
                      <tr>
                        <td>{index}</td>
                        <td>{os.name}</td>
                        <td>{os.version}</td>
                        <td>{os.build}</td>
                        <td>{os.year}</td>
                        <td>{os.comment}</td>
                        <td>
                          <Button color="warning" size="sm">
                            <i className="fa fa-edit" />
                          </Button>
                          <Button color="danger" size="sm">
                            <i className="fa fa-times" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              );
            }}
          </Query>
        </Card>
      </React.Fragment>
    );
  }
}

export default OperatingSystem;
