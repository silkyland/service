import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  CardBody,
  Button,
  Alert
} from "reactstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Dots } from "react-activity";

const ADD_USER = gql`
  mutation AddUser(
    $name: String
    $username: String
    $email: String
    $password: String
    $confirmPassword: String
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;

const UserForm = props => {
  return (
    <Mutation mutation={ADD_USER}>
      {(addUser, { data, loading, error }) => {
        if (loading)
          return (
            <CardBody>
              <Dots />
            </CardBody>
          );
        return (
          <CardBody>
            {error ? (
              <Alert color="danger">
                <h4>เกิดข้อผิดพลาด !</h4>
                <ul>
                  {error.graphQLErrors.map(({ message }) =>
                    message.split(",").map((m, i) => <li key={i}>{m}</li>)
                  )}
                </ul>
              </Alert>
            ) : (
              ""
            )}

            <Form
              onSubmit={e => {
                e.preventDefault();
                addUser({
                  variables: {
                    name: props.input.name,
                    username: props.input.username,
                    email: props.input.email,
                    password: props.input.password,
                    confirmPassword: props.input.confirmPassword
                  }
                });
              }}
            >
              <FormGroup>
                <Label>ชื่อผู้ใช้ :</Label>
                <Input
                  name="username"
                  type="text"
                  onChange={props.onInputChangeHandler}
                  placeholder="กรอกชื่อผู้ใช้"
                  autoFocus={props.autoFocus}
                  value={props.input.username}
                />
              </FormGroup>
              <FormGroup>
                <Label>ชื่อ - สกุล :</Label>
                <Input
                  name="name"
                  type="text"
                  onChange={props.onInputChangeHandler}
                  placeholder="กรอกชื่อ-สกุล"
                  value={props.input.name}
                />
              </FormGroup>
              <FormGroup>
                <Label>อีเมล์ :</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={props.onInputChangeHandler}
                  placeholder="กรอกอีเมล์"
                  value={props.input.email}
                />
              </FormGroup>
              <FormGroup>
                <Label>รหัสผ่าน :</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={props.onInputChangeHandler}
                  placeholder="กรอกรหัสผ่าน"
                  value={props.input.password}
                />
              </FormGroup>
              <FormGroup>
                <Label>ยืนยันรหัสผ่าน :</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  onChange={props.onInputChangeHandler}
                  placeholder="กรอกรหัสผ่านอีกครั้ง"
                  value={props.input.confirmPassword}
                />
              </FormGroup>
              <Button color="primary" type="submit">
                <i className="fa fa-save" /> บันทึก
              </Button>
            </Form>
          </CardBody>
        );
      }}
    </Mutation>
  );
};

export default UserForm;
