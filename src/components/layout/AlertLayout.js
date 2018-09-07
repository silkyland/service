import React from "react";
import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ALERT_QUERY = gql`
  query AlertQuery {
    badField
    goodField
  }
`;

const AlertLayout = props => (
  <Query errorPolicy="all">
    {({ error, data, loading }) => {
      if (loading) return <span>loading...</span>;
      if (error)
        return (
          <Alert color={props.color}>
            <h4>เกิดข้อผิดพลาด !</h4>
            <ul>
              {error.graphQLErrors.map(({ message }, i) => (
                <li key={i}>{message}</li>
              ))}
            </ul>
          </Alert>
        );
    }}
  </Query>
);

AlertLayout.defaultProps = {
  color: "danger",
  title: "สำเร็จ",
  message: "ข้อมูลของคุณได้ถูกบันทึกเรียบร้อยแล้ว !"
};

AlertLayout.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string
};

export default AlertLayout;
