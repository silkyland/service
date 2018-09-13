import React from "react";
import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import { ApolloConsumer, Query } from "react-apollo";
import { GET_ALERT } from "../../query/alert";
import update from "immutability-helper";

const AlertLayout = props => (
  <Query query={GET_ALERT}>
    {({ data, client }) => {
      setTimeout(() => {
        client.writeData({
          query: GET_ALERT,
          data: update(data, {
            alert: {
              $set: {
                status: false,
                color: "success",
                message: "",
                title: "",
                __typename: "Alert"
              }
            }
          })
        });
      }, 5000);
      return data.alert.status ? (
        <Alert color={data.alert.color}>
          <h4>{data.alert.title}</h4>
          <p>{data.alert.message}</p>
        </Alert>
      ) : null;
    }}
  </Query>
);

AlertLayout.defaultProps = {
  color: "success",
  title: "สำเร็จ",
  message: "ข้อมูลของคุณได้ถูกบันทึกเรียบร้อยแล้ว !"
};

AlertLayout.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string
};

export default AlertLayout;
