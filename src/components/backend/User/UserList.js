import update from "immutability-helper";
import moment from "moment";
import React from "react";
import { Dots } from "react-activity";
import { ApolloConsumer, Mutation, Query, withApollo } from "react-apollo";
import { Button, Table } from "reactstrap";
import swal from "sweetalert2";
import { DELETE_USER, GET_USER, GET_USERS } from "../../../query/user";

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
                <td>{u.role}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{moment(u.updatedAt).format("ll")}</td>
                <td>
                  <Button
                    color="warning"
                    size="sm"
                    onClick={() => {
                      props.onEditButtonClicked({
                        id: u.id,
                        role: u.role,
                        name: u.name,
                        username: u.username,
                        email: u.email,
                        createdAt: u.createdAt,
                        updatedAt: u.updatedAt
                      });
                    }}
                  >
                    <i className="fa fa-edit" /> แก้ไข
                  </Button>{" "}
                  <Mutation
                    mutation={DELETE_USER}
                    update={(cache, { data: { deleteUser } }) => {
                      let data = cache.readQuery({
                        query: GET_USERS
                      });

                      let users = data.users.filter(
                        user => user.id != deleteUser.id
                      );
                      cache.writeQuery({
                        query: GET_USERS,
                        data: update(data, {
                          users: {
                            $set: users
                          }
                        })
                      });
                      swal("เรียบร้อย !", "ข้่อมูลของคุณถูกลบแล้ว.", "success");
                    }}
                  >
                    {(deleteUser, { loading, error, client }) => {
                      if (error)
                        swal({
                          type: "warning",
                          title: "Oops! Something went wrong!",
                          showConfirmButton: false,
                          text: error.message
                        });
                      return (
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => {
                            swal({
                              title: "แน่ใจหรือไม่?",
                              text: "การลบข้อมูลไม่สามารถกู้กลับมาคืนได้!",
                              type: "warning",
                              showCancelButton: true,
                              confirmButtonText: "ใช่, ลบเลย!"
                            }).then(result => {
                              if (result.value) {
                                deleteUser({ variables: { id: u.id } });
                              }
                            });
                          }}
                        >
                          <i className="fa fa-times" /> ลบ
                        </Button>
                      );
                    }}
                  </Mutation>
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
