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
  Alert,
  FormFeedback
} from "reactstrap";
import { Dots } from "react-activity";
import swal from "sweetalert2";
import { Query, Mutation, ApolloConsumer } from "react-apollo";
import {
  GET_OPERATING_SYSTEMS,
  UPDATE_OPERATING_SYSTEM,
  CREATE_OPERATING_SYSTEM,
  DELETE_OPERATING_SYSTEM,
  GET_OPERATING_SYSTEM
} from "../../../query/operatingSystem";
import update from "immutability-helper";
import _ from "lodash";
import Loading from "../../layout/share/Loading";

class OperatingSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEdit: false,
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
      },
      hasError: {}
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.onInputChangeHander = this.onInputChangeHander.bind(this);
    this.onValidationError = this.onValidationError.bind(this);
  }
  componentDidMount() {
    document.title = "จัดการทั่วไป » ระบบปฏิบัติการ";
  }
  toggleForm() {
    let oldState = this.state.button;
    oldState["color"] = !this.state.isOpen ? "danger" : "primary";
    this.setState({
      button: oldState,
      isOpen: !this.state.isOpen,
      input: {
        id: "",
        name: "",
        version: "",
        build: "",
        year: new Date().getFullYear(),
        comment: ""
      },
      isEdit: false
    });
  }

  onInputChangeHander(e) {
    let oldInput = this.state.input;
    oldInput[e.target.name] = e.target.value;
    this.setState({ input: oldInput });
  }

  onValidationError(error) {
    if (
      _.get(error, "graphQLErrors.0.extensions.code", "") == "VALIDATION_ERROR"
    ) {
      this.setState({
        hasError: error.graphQLErrors[0].extensions.exception
      });
    }
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
              <Mutation
                mutation={CREATE_OPERATING_SYSTEM}
                update={(cache, { data: { createOperatingSystem } }) => {
                  let data = cache.readQuery({
                    query: GET_OPERATING_SYSTEMS
                  });
                  cache.writeQuery({
                    query: GET_OPERATING_SYSTEMS,
                    data: update(data, {
                      operatingSystems: { $push: [createOperatingSystem] }
                    })
                  });

                  swal(
                    "สำเร็จ !",
                    "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",
                    "success"
                  );
                  this.toggleForm();
                }}
                onError={this.onValidationError}
              >
                {(createOperatingSystem, { error, loading }) => {
                  if (loading) return <Loading />;
                  return (
                    <React.Fragment>
                      {error ? (
                        <Alert color="danger">
                          <h4>ผิดพลาด !</h4>
                          <p>{error.message}</p>
                        </Alert>
                      ) : null}
                      <Mutation
                        mutation={UPDATE_OPERATING_SYSTEM}
                        onError={this.onValidationError}
                        update={(cache, { data: updateOperatingSystem }) => {
                          let data = cache.readQuery({
                            query: GET_OPERATING_SYSTEMS
                          });
                          let index = data.operatingSystems.findIndex(
                            os => os.id == updateOperatingSystem.id
                          );
                          cache.writeQuery({
                            query: GET_OPERATING_SYSTEMS,
                            data: update(data, {
                              operatingSystems: {
                                [index]: {
                                  $set: updateOperatingSystem
                                }
                              }
                            })
                          });
                          swal(
                            "สำเร็จ !",
                            "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",
                            "success"
                          );
                          this.toggleForm();
                        }}
                      >
                        {(updateOperatingSystem, { error, loading }) => {
                          if (loading) return <Loading />;
                          return (
                            <React.Fragment>
                              {error ? (
                                <Alert color="danger">
                                  <h4>ผิดพลาด !</h4>
                                  <p>{error.message}</p>
                                </Alert>
                              ) : null}
                              <Form
                                onSubmit={e => {
                                  e.preventDefault();
                                  let input = this.state.input;
                                  let state = update(input, {
                                    year: {
                                      $set: parseInt(this.state.input.year)
                                    }
                                  });
                                  this.state.isEdit
                                    ? updateOperatingSystem({
                                        variables: state
                                      })
                                    : createOperatingSystem({
                                        variables: state
                                      });
                                }}
                              >
                                <FormGroup>
                                  <Label>
                                    ชื่อระบบปฏิบัติการ :
                                    <span className="text-danger"> *</span>
                                  </Label>
                                  <Input
                                    autoFocus
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="กรอกระบบปฏิบัติการ"
                                    onChange={this.onInputChangeHander}
                                    value={this.state.input.name}
                                    invalid={this.state.hasError.name}
                                  />
                                  {this.state.hasError.name ? (
                                    <FormFeedback>
                                      {this.state.hasError.name}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                                <FormGroup>
                                  <Label>เวอร์ชั่น: </Label>
                                  <Input
                                    type="text"
                                    name="version"
                                    placeholder="กรอกเวอร์ชั่น"
                                    onChange={this.onInputChangeHander}
                                    value={this.state.input.version}
                                    invalid={this.state.hasError.version}
                                  />
                                  {this.state.hasError.version ? (
                                    <FormFeedback>
                                      {this.state.hasError.version}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                                <FormGroup>
                                  <Label>หมายเลขบิวด์ :</Label>
                                  <Input
                                    type="text"
                                    name="build"
                                    placeholder="กรอกหมายเลขบิวต์"
                                    onChange={this.onInputChangeHander}
                                    value={this.state.input.build}
                                    invalid={this.state.hasError.build}
                                  />
                                  {this.state.hasError.build ? (
                                    <FormFeedback>
                                      {this.state.hasError.build}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                                <FormGroup>
                                  <Label>ปี :</Label>
                                  <Input
                                    pattern="[0-9]*"
                                    type="number"
                                    name="year"
                                    maxLength={4}
                                    placeholder="กรอกหมายเลขบิวต์"
                                    onChange={this.onInputChangeHander}
                                    value={this.state.input.year}
                                    invalid={this.state.hasError.year}
                                    required
                                  />
                                  {this.state.hasError.year ? (
                                    <FormFeedback>
                                      {this.state.hasError.year}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                                <FormGroup>
                                  <Label>หมายเหตุ :</Label>
                                  <Input
                                    type="text"
                                    name="comment"
                                    placeholder="กรอกหมายเหตุ"
                                    onChange={this.onInputChangeHander}
                                    value={this.state.input.comment}
                                    invalid={this.state.hasError.comment}
                                  />
                                  {this.state.hasError.comment ? (
                                    <FormFeedback>
                                      {this.state.hasError.comment}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                                <p className="text-danger">
                                  * หมายถึง จำเป็นต้องกรอกข้อมูล
                                </p>
                                <Button color="primary">
                                  <i className="fa fa-save" /> บันทึก
                                </Button>
                              </Form>
                            </React.Fragment>
                          );
                        }}
                      </Mutation>
                    </React.Fragment>
                  );
                }}
              </Mutation>
            </CardBody>
          ) : null}
          <Query query={GET_OPERATING_SYSTEMS}>
            {({ loading, error, data }) => {
              if (loading) return <Loading />;
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
                    {data.operatingSystems.length < 1 ? (
                      <tr>
                        <td colSpan={7} className="text-center">
                          == ไม่พบข้อมูล =={" "}
                        </td>
                      </tr>
                    ) : null}
                    {data.operatingSystems.map((os, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{os.name}</td>
                        <td>{os.version}</td>
                        <td>{os.build}</td>
                        <td>{os.year}</td>
                        <td>{os.comment}</td>
                        <td>
                          <Button
                            color="warning"
                            size="sm"
                            onClick={() => {
                              this.toggleForm();
                              this.setState({
                                input: {
                                  id: os.id,
                                  name: os.name,
                                  version: os.version,
                                  build: os.build,
                                  year: os.year,
                                  comment: os.comment
                                },
                                isEdit: true
                              });
                            }}
                          >
                            <i className="fa fa-edit" /> แก้ไข
                          </Button>{" "}
                          <Mutation
                            mutation={DELETE_OPERATING_SYSTEM}
                            update={(
                              cache,
                              { data: { deleteOperatingSystem } }
                            ) => {
                              let data = cache.readQuery({
                                query: GET_OPERATING_SYSTEMS
                              });
                              const removedData = data.operatingSystems.filter(
                                o => o.id !== deleteOperatingSystem.id
                              );
                              cache.writeQuery({
                                query: GET_OPERATING_SYSTEMS,
                                data: update(data, {
                                  operatingSystems: {
                                    $set: removedData
                                  }
                                })
                              });
                            }}
                          >
                            {(deleteOperatingSystem, { error, loading }) => {
                              if (error)
                                swal({
                                  type: "warning",
                                  title: "Oops! Something went wrong!",
                                  showConfirmButton: false,
                                  text: error.message
                                });
                              return (
                                <Button
                                  color="danger"
                                  size="sm"
                                  onClick={() => {
                                    swal({
                                      title: "แน่ใจหรือไม่?",
                                      text:
                                        "การลบข้อมูลไม่สามารถกู้กลับมาคืนได้!",
                                      type: "warning",
                                      showCancelButton: true,
                                      confirmButtonText: "ใช่, ลบเลย!"
                                    }).then(result => {
                                      if (result.value) {
                                        deleteOperatingSystem({
                                          variables: {
                                            id: os.id
                                          }
                                        });
                                      }
                                    });
                                  }}
                                >
                                  <i className="fa fa-times" /> ลบ
                                </Button>
                              );
                            }}
                          </Mutation>
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
