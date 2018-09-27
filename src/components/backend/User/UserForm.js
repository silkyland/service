import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  CardBody,
  Button,
  Alert,
  FormFeedback
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
import Validator from "validatorjs";
import swal from "sweetalert2";

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
          swal("เรียบร้อย !", "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว.", "success");
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
                  swal(
                    "เรียบร้อย !",
                    "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว.",
                    "success"
                  );
                  props.toggleForm();
                  props.clearInput();
                }
                if (loading) return <Dots />;
                if (error)
                  return (
                    <Alert color="danger">
                      <h4>เกิดข้อผิดพลาด !</h4>
                      <ul>
                        {error.graphQLErrors.map(({ message }) =>
                          message.split(",").map((m, i) => <li key={i}>{m}</li>)
                        )}
                      </ul>
                    </Alert>
                  );
                return (
                  <React.Fragment>
                    {error ? (
                      <Alert color="danger">
                        <h4>เกิดข้อผิดพลาด !</h4>
                        <ul>
                          {error.graphQLErrors.map(({ message }) =>
                            message
                              .split(",")
                              .map((m, i) => <li key={i}>{m}</li>)
                          )}
                        </ul>
                      </Alert>
                    ) : (
                      ""
                    )}
                    <Form
                      onSubmit={e => {
                        e.preventDefault();
                        let rules = {
                          name: "required|min:3",
                          role: "required|in:ADMIN,USER",
                          username: "required|min:3",
                          email: "email|min:3|required",
                          password: "required|min:3",
                          confirmPassword: "required|same:password"
                        };
                        if (props.isUpdate) rules["id"] = "required";

                        let validation = new Validator(props.input, rules);
                        if (validation.fails()) {
                          props.toggleErrorMessage(
                            true,
                            validation.errors.all()
                          );
                          return false;
                        } else {
                          props.toggleErrorMessage(
                            false,
                            validation.errors.all()
                          );
                        }

                        !props.isUpdate
                          ? createUser({
                              variables: {
                                name: props.input.name,
                                role: props.input.role,
                                username: props.input.username,
                                email: props.input.email,
                                password: props.input.password,
                                confirmPassword: props.input.confirmPassword
                              }
                            })
                          : updateUser({
                              variables: {
                                id: props.input.id,
                                role: props.input.role,
                                name: props.input.name,
                                username: props.input.username,
                                email: props.input.email
                              }
                            });
                      }}
                    >
                      <FormGroup>
                        <Label>ประเภทผู้ใช้งาน :</Label>

                        <Input
                          invalid={props.errorMessage.role}
                          type="select"
                          onChange={props.onInputChangeHandler}
                          name="role"
                          defaultValue={props.input.role}
                        >
                          <option value="ADMIN">ADMIN</option>
                          <option value="USER">USER</option>
                        </Input>
                        {props.errorMessage.role ? (
                          <FormFeedback>{props.errorMessage.role}</FormFeedback>
                        ) : null}
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
                          invalid={props.errorMessage.username}
                        />
                        {props.errorMessage.username ? (
                          <FormFeedback>
                            {props.errorMessage.username}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Label>ชื่อ - สกุล :</Label>
                        <Input
                          name="name"
                          type="text"
                          onChange={props.onInputChangeHandler}
                          placeholder="กรอกชื่อ-สกุล"
                          value={props.input.name}
                          invalid={props.errorMessage.name}
                        />
                        {props.errorMessage.name ? (
                          <FormFeedback>{props.errorMessage.name}</FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Label>อีเมล์ :</Label>
                        <Input
                          type="email"
                          name="email"
                          onChange={props.onInputChangeHandler}
                          placeholder="กรอกอีเมล์"
                          value={props.input.email}
                          invalid={props.errorMessage.email}
                        />
                        {props.errorMessage.email ? (
                          <FormFeedback>
                            {props.errorMessage.email}
                          </FormFeedback>
                        ) : null}
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
                              invalid={props.errorMessage.password}
                            />
                            {props.errorMessage.password ? (
                              <FormFeedback>
                                {props.errorMessage.password}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                          <FormGroup>
                            <Label>ยืนยันรหัสผ่าน :</Label>
                            <Input
                              type="password"
                              name="confirmPassword"
                              onChange={props.onInputChangeHandler}
                              placeholder="กรอกรหัสผ่านอีกครั้ง"
                              value={props.input.confirmPassword}
                              invalid={props.errorMessage.confirmPassword}
                            />
                            {props.errorMessage.confirmPassword ? (
                              <FormFeedback>
                                {props.errorMessage.confirmPassword}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </React.Fragment>
                      ) : null}

                      <Button color="primary" type="submit">
                        <i className="fa fa-save" /> บันทึก
                      </Button>
                    </Form>
                  </React.Fragment>
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
