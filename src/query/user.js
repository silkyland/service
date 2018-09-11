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

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
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
    $id: ID!
    $userTypeId: Int
    $name: String
    $username: String
    $email: String
  ) {
    updateUser(
      id: $id
      userTypeId: $userTypeId
      name: $name
      username: $username
      email: $email
    ) {
      id
      name
      userType {
        id
        name
      }
      email
      username
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
    $userTypeId: Int
    $username: String
    $email: String
    $password: String
    $confirmPassword: String
  ) {
    createUser(
      name: $name
      userTypeId: $userTypeId
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
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
