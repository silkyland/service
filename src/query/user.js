import gql from "graphql-tag";

export const GET_USERS = gql`
  {
    users {
      id
      userType {
        id
        name
      }
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID
    $userTypeId: Int
    $name: String
    $username: String
    $email: String
  ) {
    updateUser(id: $id, name: $name, username: $username, email: $email) {
      id
      userType {
        id
        name
      }
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
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
