import React from "react";
import { Form, FormGroup, Label, Input, CardBody, Button } from "reactstrap";
const FormInput = props => (
  <CardBody>
    <Form
      onSubmit={e => {
        Form.input = "";
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
      <Button color="primary">
        <i className="fa fa-save" /> บันทึก
      </Button>
    </Form>
  </CardBody>
);

export default FormInput;
