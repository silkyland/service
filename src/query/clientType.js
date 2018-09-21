import gql from "graphql-tag";

export const GET_CLIENT_TYPE = gql`
  query getClientType($id: ID!) {
    getClientType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_CLIENT_TYPES = gql`
  {
    clientTypes {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CLIENT_TYPE = gql`
  mutation updateClientType($id: ID!, $name: String!) {
    updateClientType(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CLIENT_TYPE = gql`
  mutation deleteClientType($id: ID!) {
    deleteClientType(id: $id) {
      id
    }
  }
`;
