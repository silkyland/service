import React, { Component } from "react";
import { Card, CardHeader, Button } from "reactstrap";
import UserList from "./UserList";
import FormInput from "./FormInput";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      input: {
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ isOpen: !this.state.isOpen });
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
            <FormInput
              {...this.state}
              onInputChangeHandler={this.onInputChangeHandler}
              autoFocus={true}
            />
          ) : null}

          <UserList />
        </Card>
      </React.Fragment>
    );
  }
}

export default User;