import gql from "graphql-tag";

export const GET_AUTH = gql`
  query auth @client {
    token
    id
    name
    role
    username
    email
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        name
        username
        role
        email
      }
    }
  }
`;

export const SET_AUTH = gql`
  mutation setAuth(
    $id: ID!
    $name: String
    $role: Role
    $username: String
    $email: String
  ) @client {
    setAuth(
      id: $id
      name: $name
      role: $role
      username: $username
      email: $email
    ) {
      id
      name
      role
      username
      email
    }
  }
`;
