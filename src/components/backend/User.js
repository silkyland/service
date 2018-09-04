import React from "react";
import { Card, CardBody, CardHeader, Table, Button } from "reactstrap";
const User = props => {
  return (
    <Card>
      <CardHeader>จัดการผู้ใช้งาน</CardHeader>
      <Table>
        <tr>
          <th>#</th>
          <th>ชื่อ - สกุล</th>
          <th>ชื่อผู้ใช้</th>
          <th>อีเมล์</th>
          <th>จัดการ</th>
        </tr>
        <tr>
          <td>1</td>
          <td>นายบัณฑิต นันทะเทศ</td>
          <td>admin</td>
          <td>silkyland@gmail.com</td>
          <td>
            <Button color="warning" size="sm">
              <i className="fa fa-edit" /> แก้ไข
            </Button>{" "}
            <Button color="danger" size="sm">
              <i className="fa fa-times" /> ลบ
            </Button>
          </td>
        </tr>
      </Table>
    </Card>
  );
};

export default User;
