import React from "react";
import { Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Dots } from "react-activity";
import moment from "moment";
moment.locale("en");

const GET_USERS = gql`
  {
    users {
      id
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;

const User = props => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <Dots />;
      if (error) return `Error! ${error.message}`;
      return (
        <Card>
          <CardHeader>จัดการผู้ใช้งาน</CardHeader>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>ชื่อ - สกุล</th>
                <th>ชื่อผู้ใช้</th>
                <th>อีเมล์</th>
                <th>แก้ไขล่าสุด</th>
                <th>จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((u, index) => (
                <tr key={u.name}>
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{moment(u.updatedAt).format("lll")}</td>
                  <td>
                    <Button color="warning" size="sm">
                      <i className="fa fa-edit" /> แก้ไข
                    </Button>{" "}
                    <Button color="danger" size="sm">
                      <i className="fa fa-times" /> ลบ
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      );
    }}
  </Query>
);

export default User;
