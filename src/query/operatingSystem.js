import gql from "graphql-tag";

export const GET_OPERATING_SYSTEM = gql`
  query getOperatingSystem($id: ID) {
    getOperatingSystem(id: $id) {
      id
      name
      version
      build
      year
      comment
      createdAt
      updatedAt
    }
  }
`;

export const GET_OPERATING_SYSTEMS = gql`
  {
    operatingSystems {
      id
      name
      version
      build
      year
      comment
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_OPERATING_SYSTEM = gql`
  mutation createOperatingSystem(
    $name: String!
    $version: String
    $build: String
    $year: Int!
    $comment: String
  ) {
    createOperatingSystem(
      name: $name
      version: $version
      build: $build
      year: $year
      comment: $comment
    ) {
      id
      name
      version
      build
      year
      comment
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_OPERATING_SYSTEM = gql`
  mutation updateOperatingSystem(
    $id: ID!
    $name: String!
    $version: String
    $build: String
    $year: Int!
    $comment: String
  ) {
    updateOperatingSystem(
      id: $id
      name: $name
      version: $version
      build: $build
      year: $year
      comment: $comment
    ) {
      id
      name
      version
      build
      year
      comment
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_OPERATING_SYSTEM = gql`
  mutation deleteOperatingSystem($id: ID!) {
    deleteOperatingSystem(id: $id) {
      id
    }
  }
`;
