import gql from "graphql-tag";

export const GET_APPLICATION = gql`
  query getApplication($id: ID!) {
    getApplication(id: $id) {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const GET_APPLICATIONS = gql`
  {
    application {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_APPLICATION = gql`
  mutation createApplication(
    $name: String!
    $version: String
    $comment: String
  ) {
    createApplication(name: $name, version: $version, comment: $comment) {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_APPLICATION = gql`
  mutation updateApplication(
    $id: ID!
    $name: String
    $version: String
    $comment: String
  ) {
    updateApplication(
      id: $id
      name: $name
      version: $version
      comment: $comment
    ) {
      id
      name
      version
      comment
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_APPLICATION = gql`
  mutation deleteApplication($id: ID!) {
    deleteApplication(id: $id) {
      id
    }
  }
`;
