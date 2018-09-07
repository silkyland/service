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
  <Query query={ALERT_QUERY} errorPolicy="all">
    {({ error, data, loading }) => {
      if (loading) return <span>loading...</span>;
      return (
        <Alert color={props.color}>
          <pre>
            {error.graphQLErrors.map(({ message }, i) => (
              <span key={i}>{message}</span>
            ))}
          </pre>
        </Alert>
      );
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
