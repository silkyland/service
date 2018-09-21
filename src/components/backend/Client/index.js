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
  Alert
} from "reactstrap";
import swal from "sweetalert2";

class Client extends Component {
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
  componentDidMount() {
    document.title = "จัดการทั่วไป » ผู้มารับบริการ";
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
          <i className="fa fa-users" /> ผู้มารับบริการ
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
      </Card>
    );
  }
}

export default Client;
