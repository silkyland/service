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
      id: $id
      Role: $Role
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
    $name: String!
    $role: String!
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      data: {
        name: $name
        role: $role
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
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
