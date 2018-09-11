import React, { Component } from "react";
import { Card, CardHeader, Button, CardBody } from "reactstrap";
import UserList from "./UserList";
import UserForm from "./UserForm";
import AlertLayout from "../../layout/AlertLayout";
import { ApolloConsumer } from "react-apollo";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isUpdate: false,
      input: {
        id: "",
        username: "",
        userTypeId: 1,
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.onEditButtonClicked = this.onEditButtonClicked.bind(this);
  }

  onEditButtonClicked(id) {
    <ApolloConsumer>
      {client => {
        console.log(client);
      }}
    </ApolloConsumer>;
    return false;
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
            <UserForm
              {...this.state}
              onInputChangeHandler={this.onInputChangeHandler}
              autoFocus={true}
              toggleForm={this.toggleForm}
            />
          ) : null}

          <UserList onEditButtonClicked={this.onEditButtonClicked} />
        </Card>
      </React.Fragment>
    );
  }
}

export default User;
