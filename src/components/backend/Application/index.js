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
        <CardBody>
          <h4>โปรดกรอกรายละเอียดให้ครบถ้วน</h4>
          <Form>
            <FormGroup>
              <Label>ชื่อ : </Label>
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
                <FormFeedback>{this.state.hasError.name}</FormFeedback>
              ) : (
                undefined
              )}
            </FormGroup>
            <FormGroup>
              <Label>เวอร์ชั่น : </Label>
              <Input
                type="text"
                autoFocus={true}
                name="name"
                placeholder="เวอร์ชั่นของโปรแกรม"
                required
                value={this.state.input.name}
                onChange={this.onInputChangeHandler}
                invalid={this.state.hasError.name}
              />
              {this.state.hasError.name ? (
                <FormFeedback>{this.state.hasError.name}</FormFeedback>
              ) : (
                undefined
              )}
            </FormGroup>
            <Button type="submit" color="primary">
              <i className="fa fa-save" /> บันทึก
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default Application;
