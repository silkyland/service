import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Alert
} from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { Dots } from "react-activity";
import {
  GET_CAMPUSES,
  CREATE_CAMPUS,
  UPDATE_CAMPUS,
  DELETE_CAMPUS,
  GET_CAMPUS
} from "../../../query/campus";
import swal from "sweetalert2";
import update from "immutability-helper";
class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isUpdate: false,
      mainButton: {
        color: "primary",
        size: "sm",
        text: "เปิด",
        icon: "fa fa-plus"
      },
      input: {
        id: "",
        name: ""
      }
    };
    this.toggleMainButton = this.toggleMainButton.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  toggleMainButton() {
    let mainButton = !this.state.isOpen
      ? { color: "danger", size: "sm", text: "ปิด", icon: "fa fa-times" }
      : {
          color: "primary",
          size: "sm",
          text: "เปิด",
          icon: "fa fa-plus"
        };
    this.setState({
      isOpen: !this.state.isOpen,
      mainButton: mainButton,
      isUpdate: false,
      input: {
        id: "",
        name: ""
      }
    });
  }

  onInputChangeHandler(e) {
    let oldInput = this.state.input;
    oldInput[e.target.name] = e.target.value;
    this.setState({ input: oldInput });
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <i className="icon icon-puzzle" /> พื้นที่จัดการศึกษา
          <Button
            className="pull-right"
            size={this.state.mainButton.size}
            color={this.state.mainButton.color}
            onClick={this.toggleMainButton}
          >
            <i className={this.state.mainButton.icon} />{" "}
            {this.state.mainButton.text}
          </Button>
        </CardHeader>
        {this.state.isOpen ? (
          <CardBody>
            <Mutation
              mutation={CREATE_CAMPUS}
              update={(cache, { data: { createCampus } }) => {
                let data = cache.readQuery({ query: GET_CAMPUSES });
                cache.writeQuery({
                  query: GET_CAMPUSES,
                  data: update(data, { campuses: { $push: [createCampus] } })
                });
                swal("สำเร็จ", "บันทึกข้อมูลสำเร็จแล้ว !", "success");
                this.toggleMainButton();
              }}
            >
              {(createCampus, { error, loading }) => {
                if (loading) return <Dots />;
                return (
                  <Mutation
                    mutation={UPDATE_CAMPUS}
                    update={(cache, { data: { updateCampus } }) => {
                      let data = cache.readQuery({
                        query: GET_CAMPUSES
                      });

                      let index = data.campuses.findIndex(
                        cp => cp.id === updateCampus.id
                      );
                      cache.writeQuery({
                        query: GET_CAMPUSES,
                        data: update(data, {
                          campuses: { [index]: { $set: updateCampus } }
                        })
                      });
                      swal("สำเร็จ", "บันทึกข้อมูลสำเร็จแล้ว !", "success");
                      this.toggleMainButton();
                    }}
                  >
                    {(updateCampus, { error, loading }) => {
                      if (loading) return <Dots />;
                      return (
                        <React.Fragment>
                          {error ? (
                            <Alert color="danger">
                              <h4>มีข้อผิดพลาด !</h4>
                              <p>{error.message}</p>
                            </Alert>
                          ) : null}
                          <Form
                            onSubmit={e => {
                              e.preventDefault();
                              this.state.isUpdate
                                ? updateCampus({ variables: this.state.input })
                                : createCampus({ variables: this.state.input });
                            }}
                          >
                            <FormGroup>
                              <Label>ชื่อพื้นที่จัดการศึกษา</Label>
                              <Input
                                name="name"
                                placeholder="กรอกพื้นที่จัดการศึกษา"
                                value={this.state.input.name}
                                onChange={this.onInputChangeHandler}
                                autoFocus
                                required
                              />
                            </FormGroup>
                            <Button color="primary">
                              <i className="fa fa-save" /> บันทึก
                            </Button>
                          </Form>
                        </React.Fragment>
                      );
                    }}
                  </Mutation>
                );
              }}
            </Mutation>
          </CardBody>
        ) : (
          <Query query={GET_CAMPUSES}>
            {({ data, error, loading }) => {
              if (error)
                return (
                  <CardBody>
                    <Alert color="danger">
                      <h4>เกิดข้อผิดพลาด !</h4> <p>{error.message}</p>
                    </Alert>
                  </CardBody>
                );
              if (loading) return <Dots />;
              return (
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>พื้นที่จัดการศึกษา</th>
                      <th>จัดการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.campuses.length < 1 ? (
                      <tr>
                        <td colSpan={3} className="text-center">
                          {" "}
                          == ไม่พบข้อมูล =={" "}
                        </td>
                      </tr>
                    ) : (
                      data.campuses.map((campus, index) => (
                        <tr>
                          <td>{index + 1} </td>
                          <td>{campus.name}</td>
                          <td>
                            <Button
                              size="sm"
                              color="warning"
                              onClick={() => {
                                this.toggleMainButton();
                                this.setState({
                                  input: {
                                    id: campus.id,
                                    name: campus.name
                                  },
                                  isUpdate: true
                                });
                              }}
                            >
                              <i className="fa fa-edit" /> แก้ไข
                            </Button>{" "}
                            <Mutation
                              mutation={DELETE_CAMPUS}
                              update={(cache, { data: { deleteCampus } }) => {
                                let data = cache.readQuery({
                                  query: GET_CAMPUSES
                                });
                                let campuses = data.campuses.filter(
                                  cp => cp.id !== deleteCampus.id
                                );
                                cache.writeQuery({
                                  query: GET_CAMPUSES,
                                  data: update(data, {
                                    campuses: { $set: campuses }
                                  })
                                });
                                swal(
                                  "สำเร็จ !",
                                  "ข้อมูลของคุณได้ถูกลบเรียบร้อยแล้ว",
                                  "success"
                                );
                              }}
                            >
                              {(deleteCampus, { error, loading }) => {
                                if (error)
                                  swal({
                                    type: "warning",
                                    title:
                                      "Oops! เกิดข้อผิดพลาดขณะบันทึกข้อมูล!",
                                    showConfirmButton: true,
                                    text: error.message
                                  });
                                return (
                                  <Button
                                    size="sm"
                                    color="danger"
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
                                          deleteCampus({
                                            variables: {
                                              id: campus.id
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
                      ))
                    )}
                  </tbody>
                </Table>
              );
            }}
          </Query>
        )}
      </Card>
    );
  }
}

export default Campus;
