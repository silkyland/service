import gql from "graphql-tag";

export const GET_OFFICE = gql`
  query getOffice($id: ID!) {
    getOffice(id: $id) {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const GET_OFFICES = gql`
  {
    offices {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_OFFICE = gql`
  mutation createOffice($name: String!, $version: String, $comment: String) {
    createOffice(name: $name, version: $version, comment: $comment) {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const updateOffice = gql`
  mutation updateOffice(
    $id: ID!
    $name: String!
    $version: String
    $comment: String
  ) {
    updateOffice(id: $id, name: $name, version: $version, comment: $comment) {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const deleteOffice = gql`
  mutation updateOffice($id: ID!) {
    deleteOffice(id: $id) {
      id
    }
  }
`;
