import React, { Component } from "react";
import { Button, Card, CardHeader } from "reactstrap";
import UserForm from "./UserForm";
import UserList from "./UserList";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isUpdate: false,
      isError: false,
      validateErrors: {},
      input: {
        id: "",
        username: "",
        role: "USER",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.onEditButtonClicked = this.onEditButtonClicked.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.toggleErrorMessage = this.toggleErrorMessage.bind(this);
  }

  componentDidMount() {
    document.title = "จัดการผู้ใข้งาน";
  }

  toggleErrorMessage(errors) {
    this.setState({ validateErrors: errors });
  }

  clearInput() {
    this.setState({
      isError: false,
      validateErrors: {},
      input: {
        id: "",
        username: "",
        role: "USER",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    });
  }

  onEditButtonClicked(user) {
    this.setState({ input: user, isUpdate: true, isOpen: true });
  }

  toggleForm() {
    this.setState({ isOpen: !this.state.isOpen, isUpdate: false });
    this.clearInput();
  }

  onInputChangeHandler(e) {
    let oldState = this.state.input;
    oldState[e.target.name] = e.target.value;
    this.setState({ input: oldState });
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            จัดการผู้ใช้งาน
            <div className="float-right">
              {this.state.isOpen ? (
                <Button color="danger" size="sm" onClick={this.toggleForm}>
                  <i className="fa fa-times" /> ปิด
                </Button>
              ) : (
                <Button color="primary" size="sm" onClick={this.toggleForm}>
                  <i className="fa fa-plus" /> เปิด
                </Button>
              )}
            </div>
          </CardHeader>
          {this.state.isOpen ? (
            <UserForm
              {...this.state}
              onInputChangeHandler={this.onInputChangeHandler}
              autoFocus={true}
              toggleForm={this.toggleForm}
              clearInput={this.clearInput}
              toggleErrorMessage={this.toggleErrorMessage}
            />
          ) : null}

          <UserList onEditButtonClicked={this.onEditButtonClicked} />
        </Card>
      </React.Fragment>
    );
  }
}

export default User;
