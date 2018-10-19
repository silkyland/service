import PropTypes from "prop-types";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import swal from "sweetalert2";
import { LOGIN } from "../../query/auth";
import Loading from "../layout/share/Loading";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        username: "",
        password: ""
      },
      hasError: {}
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }
  static contextTypes = {
    router: PropTypes.object
  };

  async componentDidMount() {
    document.title = "เข้าสู่ระบบ";
    const auth = await JSON.parse(localStorage.getItem("auth"));
    console.log(auth);
    if (auth) {
      this.context.router.history.push("/admin/dashboard");
    }
  }

  setErrorMessage(message) {
    this.setState({ hasError: message });
  }

  onInputChangeHandler(e) {
    let oldState = this.state.input;
    oldState[e.target.name] = e.target.value;
    this.setState({ input: oldState });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <Mutation
                    mutation={LOGIN}
                    update={async (cache, { data: { login } }) => {
                      const data = { auth: login, __typename: "Auth" };
                      try {
                        localStorage.setItem("auth", JSON.stringify(login));
                        cache.writeData({ data });
                        swal({
                          type: "success",
                          title: "สำเร็จ !",
                          text: "เข้าสู่ระบบเรียบร้อย กำลังพาท่านไปยังหน้าหลัก",
                          timer: 1500
                        });
                        this.context.router.history.push("/admin/dashboard");
                      } catch (error) {
                        swal("ผิดพลาด!", error.message, "warning");
                      }
                    }}
                    onError={
                      error =>
                        error.graphQLErrors[0].extensions.code ==
                        "VALIDATION_ERROR"
                          ? this.setErrorMessage(
                              error.graphQLErrors[0].extensions.exception
                            )
                          : undefined
                      //console.log(JSON.stringify(error))
                    }
                  >
                    {(login, { error, loading, cache }) => {
                      if (loading) return <Loading />;

                      return (
                        <CardBody>
                          {error ? (
                            <Alert color="danger">
                              <p>{error.message}</p>
                            </Alert>
                          ) : (
                            undefined
                          )}
                          <Form
                            onSubmit={e => {
                              e.preventDefault();
                              login({ variables: this.state.input });
                            }}
                          >
                            <h1>เข้าสู่ระบบ</h1>
                            <p className="text-muted">
                              โปรดกรอกข้อมูลให้ครบถ้วน
                            </p>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                placeholder="ชื่อผู้ใช้งาน"
                                autoComplete="username"
                                onChange={this.onInputChangeHandler}
                                name="username"
                                value={this.state.input.username}
                                invalid={this.state.hasError.username}
                                autoFocus
                              />
                              {this.state.hasError.username ? (
                                <FormFeedback>
                                  {this.state.hasError.username}
                                </FormFeedback>
                              ) : null}
                            </InputGroup>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-lock" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="password"
                                placeholder="รหัสผ่าน"
                                name="password"
                                onChange={this.onInputChangeHandler}
                                autoComplete="current-password"
                                value={this.state.input.password}
                                invalid={this.state.hasError.password}
                              />
                              {this.state.hasError.password ? (
                                <FormFeedback>
                                  {this.state.hasError.password}
                                </FormFeedback>
                              ) : null}
                            </InputGroup>
                            <Row>
                              <Col xs="6">
                                <Button color="primary" className="px-4">
                                  เข้าสู่ระบบ
                                </Button>
                              </Col>
                              <Col xs="6" className="text-right">
                                <Button color="link" className="px-0">
                                  ลืมรหัสผ่าน ?
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      );
                    }}
                  </Mutation>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: 44 + "%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <img
                        src={require("../../assets/cmru-logo-1.png")}
                        alt="มหาวิทยาลัยราชภัฏเชียงใหม่"
                        style={{ marginBottom: 20, width: 84 }}
                      />
                      <p>ระบบฐานข้อมูลซ่อมบำรุง</p>
                      <p>โดย ฝ่ายซ่อมบำรุง สำนักดิจิทัลเพื่อการศึกษา</p>
                      <p> มหาวิทยาลัยราชภัฏเชียงใหม่</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
