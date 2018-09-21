import gql from "graphql-tag";

export const GET_CLIENT = gql`
  query getClient($id: ID!) {
    getClient(id: $id) {
      id
      clientType {
        id
        name
        createdAt
        updatedAt
      }
      department {
        id
        name
        createdAt
        updatedAt
      }
      stdId
      idCard
      name
      thumbnail
      email
      email
      mobile
      phone
      line
      createdAt
      updatedAt
    }
  }
`;

export const GET_CLIENTS = gql`
  {
    clients {
      id
      clientType {
        id
        name
        createdAt
        updatedAt
      }
      department {
        id
        name
        createdAt
        updatedAt
      }
      stdId
      idCard
      name
      thumbnail
      email
      email
      mobile
      phone
      line
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation createClient(
    $clientTypeId: Int!
    $departmentId: Int!
    $stdId: Int!
    $idCard: Int!
    $name: String
    $thumbnail: String
    $email: String
    $mobile: String
    $phone: String
    $line: String
  ) {
    createClient(
      clientTypeId: $clientTypeId
      departmentId: $departmentId
      stdId: $stdId
      idCard: $idCard
      name: $name
      thumbnail: $thumbnail
      email: $email
      mobile: $mobile
      phone: $phone
      line: $line
    ) {
      id
      clientType {
        id
        name
        createdAt
        updatedAt
      }
      department {
        id
        name
        createdAt
        updatedAt
      }
      stdId
      idCard
      name
      thumbnail
      email
      email
      mobile
      phone
      line
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $id: ID!
    $clientTypeId: Int!
    $departmentId: Int!
    $stdId: Int!
    $idCard: Int!
    $name: String
    $thumbnail: String
    $email: String
    $mobile: String
    $phone: String
    $line: String
  ) {
    updateClient(
      id: $id
      clientTypeId: $clientTypeId
      departmentId: $departmentId
      stdId: $stdId
      idCard: $idCard
      name: $name
      thumbnail: $thumbnail
      email: $email
      mobile: $mobile
      phone: $phone
      line: $line
    ) {
      id
      clientType {
        id
        name
        createdAt
        updatedAt
      }
      department {
        id
        name
        createdAt
        updatedAt
      }
      stdId
      idCard
      name
      thumbnail
      email
      email
      mobile
      phone
      line
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
    }
  }
`;
