import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Table,
  Button,
  Alert,
  FormFeedback
} from "reactstrap";
import swal from "sweetalert2";
import { _ } from "lodash";
import { Mutation, Query } from "react-apollo";
import {
  CREATE_APPLICATION,
  UPDATE_APPLICATION,
  GET_APPLICATIONS
} from "../../../query/application";
import Loading from "../../layout/share/Loading";
import update from "immutability-helper";

class Application extends Component {
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
        name: "",
        version: "",
        comment: ""
      },
      hasError: {}
    };
    this.toggleMainButton = this.toggleMainButton.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onErrorValidation = this.onErrorValidation.bind(this);
  }

  onErrorValidation(error) {
    if (
      _.get(error, "graphQLErrors[0].extensions.code", "") ===
      "VALIDATION_ERROR"
    ) {
      this.setState({
        hasError: error.graphQLErrors[0].extensions.exception
      });
    }
  }

  componentDidMount() {
    document.title = "จัดการทั่วไป » โปรแกรม";
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
        name: "",
        version: "",
        comment: ""
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
          <i className="fa fa-chrome" /> โปรแกรม
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
            <h4>โปรดกรอกรายละเอียดให้ครบถ้วน</h4>
            <Mutation
              mutation={CREATE_APPLICATION}
              onError={this.onErrorValidation}
              update={(cache, { data: createApplication }) => {
                let data = cache.readQuery({ GET_APPLICATIONS });
                cache.writeQuery({
                  query: GET_APPLICATIONS,
                  data: update(data, {
                    applications: { $push: [createApplication] }
                  })
                });
              }}
            >
              {(createApplication, { error, loading }) => {
                if (loading) return <Loading />;
                if (error) swal("เกิดข้อผิดพลาด!", error.message, "error");
                return (
                  <Mutation
                    mutation={UPDATE_APPLICATION}
                    onError={this.onErrorValidation}
                    update={(cache, { data: updateApplication }) => {
                      let data = cache.readQuery({ query: GET_APPLICATIONS });
                      let index = updateApplication.findIndex(
                        application => application.id === updateApplication.id
                      );
                      cache.writeData({
                        query: GET_APPLICATIONS,
                        data: update(data, {
                          applications: { [index]: { $set: updateApplication } }
                        })
                      });
                    }}
                  >
                    {(updateApplication, { error, loading }) => {
                      if (loading) return <Loading />;
                      if (error)
                        swal("เกิดข้อผิดพลาด!", error.message, "error");
                      return (
                        <Form
                          onSubmit={e => {
                            e.preventDefault();
                            this.state.isEdit
                              ? updateApplication
                              : createApplication;
                          }}
                        >
                          <FormGroup>
                            <Label>
                              ชื่อ: <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              autoFocus={true}
                              name="name"
                              placeholder="ชื่อโปรแกรม"
                              required
                              value={this.state.input.name}
                              onChange={this.onInputChangeHandler}
                              invalid={this.state.hasError.name}
                            />
                            {this.state.hasError.name ? (
                              <FormFeedback>
                                {this.state.hasError.name}
                              </FormFeedback>
                            ) : (
                              undefined
                            )}
                          </FormGroup>
                          <FormGroup>
                            <Label>เวอร์ชั่น : </Label>
                            <Input
                              type="text"
                              name="version"
                              placeholder="เวอร์ชั่นของโปรแกรม"
                              value={this.state.input.version}
                              onChange={this.onInputChangeHandler}
                              invalid={this.state.hasError.version}
                            />
                            {this.state.hasError.version ? (
                              <FormFeedback>
                                {this.state.hasError.version}
                              </FormFeedback>
                            ) : (
                              undefined
                            )}
                          </FormGroup>
                          <FormGroup>
                            <Label>หมายเหตุ : </Label>
                            <Input
                              type="text"
                              name="comment"
                              placeholder="กรอกหมายเหตุ"
                              value={this.state.input.comment}
                              onChange={this.onInputChangeHandler}
                              invalid={this.state.hasError.comment}
                            />
                            {this.state.hasError.comment ? (
                              <FormFeedback>
                                {this.state.hasError.comment}
                              </FormFeedback>
                            ) : (
                              undefined
                            )}
                          </FormGroup>
                          <p>
                            <span className="text-danger">*</span> หมายถึง
                            จำเป็นต้องกรอกข้อมูล
                          </p>
                          <Button type="submit" color="primary">
                            <i className="fa fa-save" /> บันทึก
                          </Button>
                        </Form>
                      );
                    }}
                  </Mutation>
                );
              }}
            </Mutation>
          </CardBody>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>ชื่อ</th>
                <th>เวอร์ชั่น</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <Query query={GET_APPLICATIONS}>
                {({ error, loading, data }) => {
                  if (loading) return <Loading />;
                  if (error) swal("ผิดพลาด!", error.message, "error");
                  return data.applications.map((application, index) => (
                    <tr key={application.id}>
                      <td>{index + 1}</td>
                      <td>{application.name}</td>
                      <td>{application.version}</td>
                      <td>{application.comment}</td>
                    </tr>
                  ));
                }}
              </Query>
            </tbody>
          </Table>
        )}
      </Card>
    );
  }
}

export default Application;
