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
import { Mutation, Query, ApolloConsumer } from "react-apollo";
import { Dots } from "react-activity";
import {
  CREATE_USER,
  GET_USERS,
  UPDATE_USER,
  GET_USER
} from "../../../query/user";
import update from "immutability-helper";
import { ALL_USER_TYPES } from "../../../query/userType";
import { SET_ALERT, GET_ALERT } from "../../../query/alert";

const updateCache = (cache, { data: { createUser } }) => {
  let { users } = cache.readQuery({ query: GET_USERS });

  cache.writeQuery({
    query: GET_USERS,
    data: {
      users: update(users, { $push: [createUser] })
    }
  });
};

const updateCacheFromUserUpdate = (cache, { data: { updateUser } }) => {
  let { users } = cache.readQuery({
    query: GET_USERS
  });

  let index = users.findIndex(u => u.id == updateUser.id);

  cache.writeQuery({
    query: GET_USERS,
    data: {
      users: update(users, { [index]: { $set: updateUser } })
    }
  });
};

const UserForm = props => {
  return (
    <Mutation mutation={CREATE_USER} update={updateCache}>
      {(createUser, { data, loading, error }) => {
        if (loading)
          return (
            <CardBody>
              <Dots />
            </CardBody>
          );
        if (data) {
          <Alert color="success">
            <p>
              <strong> สำเร็จ !</strong>
              ข้อมูลของคุณได้ถูกบันทึกเรียบร้อยแล้ว
            </p>
          </Alert>;
          props.toggleForm();
          props.clearInput();
        }
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
            <Mutation mutation={UPDATE_USER} update={updateCacheFromUserUpdate}>
              {(updateUser, { loading, error, data, client }) => {
                if (data) {
                  let data = client.readQuery({
                    query: GET_ALERT
                  });

                  client.writeQuery({
                    query: GET_ALERT,
                    data: update(data, {
                      alert: {
                        $set: {
                          status: true,
                          color: "success",
                          message: "ข้อมูลของคุณได้ถูกบันทึกเรียบร้อยแล้ว",
                          title: "สำเร็จ ! ",
                          __typename: "Alert"
                        }
                      }
                    })
                  });

                  props.toggleForm();
                  props.clearInput();
                }
                return (
                  <Form
                    onSubmit={e => {
                      e.preventDefault();
                      !props.isUpdate
                        ? createUser({
                            variables: {
                              name: props.input.name,
                              userTypeId: props.input.userTypeId,
                              username: props.input.username,
                              email: props.input.email,
                              password: props.input.password,
                              confirmPassword: props.input.confirmPassword
                            }
                          })
                        : updateUser({
                            variables: {
                              id: props.input.id,
                              userTypeId: props.input.userTypeId,
                              name: props.input.name,
                              username: props.input.username,
                              email: props.input.email
                            }
                          });
                    }}
                  >
                    <FormGroup>
                      <Label>ประเภทผู้ใช้งาน :</Label>
                      <Query query={ALL_USER_TYPES}>
                        {({ loading, error, data }) => {
                          if (loading) return <Dots />;
                          if (error) return `Error! ${error.message}`;
                          return (
                            <Input
                              type="select"
                              onChange={props.onInputChangeHandler}
                              name="userTypeId"
                              defaultValue={props.input.userTypeId}
                            >
                              {data.userTypes.map((ut, index) => (
                                <option key={index} value={ut.id}>
                                  {ut.name}
                                </option>
                              ))}
                            </Input>
                          );
                        }}
                      </Query>
                    </FormGroup>
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
                    {!props.isUpdate ? (
                      <React.Fragment>
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
                      </React.Fragment>
                    ) : null}

                    <Button color="primary" type="submit">
                      <i className="fa fa-save" /> บันทึก
                    </Button>
                  </Form>
                );
              }}
            </Mutation>
          </CardBody>
        );
      }}
    </Mutation>
  );
};

export default UserForm;
