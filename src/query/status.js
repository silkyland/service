import gql from "graphql-tag";

export const GET_STATUS = gql`
  query getStatus($id: ID!) {
    getStatus(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_STATUSES = gql`
  {
    statuses {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_STATUS = gql`
  mutation createStatus($name: String) {
    createStatus(name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_STATUS = gql`
  mutation updateStatus($id: ID!, $name: String) {
    updateStatus(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const DELETE_STATUS = gql`
  mutation deleteStatus($id: ID!) {
    deleteStatus(id: $id) {
      id
    }
  }
`;
