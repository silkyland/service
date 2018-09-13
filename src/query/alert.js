import gql from "graphql-tag";

export const GET_ALERT = gql`
  {
    alert @client {
      status
      color
      message
      title
    }
  }
`;

export const SET_ALERT = gql`
  mutation setAlert(
    $status: Boolean
    $color: String
    $message: String
    $title: String
  ) @client {
    setAlert(status: $status, color: $color, message: $message, title: $title)
      @client {
      status
      color
      message
      title
    }
  }
`;
