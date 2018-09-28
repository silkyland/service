import gql from "graphql-tag";

export const GET_USERS = gql`
  {
    users {
      id
      role
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
    user(where: { id: $id }) {
      id
      role
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
    $role: Role!
    $name: String!
    $username: String!
    $email: String!
  ) {
    updateUser(
      data: { role: $role, name: $name, username: $username, email: $email }
      where: { id: $id }
    ) {
      id
      name
      role
      email
      username
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_BY_USERNAME_AND_PASSWORD = gql`
  query getUserByUsernameAndPassword($username: String, $password: String) {
    users(where: { username: $username, password: $password }) {
      id
      name
      role
      username
      email
      createdAt
      updatedAts
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(where: { id: $id }) {
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $role: Role!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      data: {
        name: $name
        role: $role
        username: $username
        email: $email
        password: $password
      }
    ) {
      id
      role
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;
