import React from "react";
import { Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import gql from "graphql-tag";
import { Query, withApollo, ApolloConsumer } from "react-apollo";
import { Dots } from "react-activity";
import moment from "moment";
import { GET_USERS, GET_USER } from "../../../query/user";

const UserList = props => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <Dots />;
      if (error) return `Error! ${error.message}`;
      return (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ประเภทผู้ใช้งาน</th>
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
                <td>{u.userType.name}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{moment(u.updatedAt).format("ll")}</td>
                <td>
                  <ApolloConsumer>
                    {client => {
                      return (
                        <Button
                          color="warning"
                          size="sm"
                          onClick={async () => {
                            const { data } = await client.query({
                              query: GET_USER,
                              variables: { id: u.id }
                            })
                            props.onEditButtonClicked({
                              id: data.user.id,
                              userTypeId: data.user.userType.id,
                              name: data.user.name,
                              username: data.user.username,
                              email: data.user.email,
                              createdAt: data.user.createdAt,
                              updatedAt: data.user.updatedAt
                            })
                          }
                          }
                        >
                          <i className="fa fa-edit" /> แก้ไข
                        </Button>
                      );
                    }}
                  </ApolloConsumer>
                  {" "}
                  <Button color="danger" size="sm">
                    <i className="fa fa-times" /> ลบ
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }}
  </Query>
);

export default withApollo(UserList);
