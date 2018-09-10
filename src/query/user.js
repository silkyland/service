import gql from "graphql-tag";

export const GET_USERS = gql`
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

export const CREATE_USER = gql`
  mutation createUser(
    $name: String
    $username: String
    $email: String
    $password: String
    $confirmPassword: String
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;
