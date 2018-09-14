import gql from "graphql-tag";

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
    $name: String
    $version: String
    $build: String
    $year: String
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
    $name: String
    $version: String
    $build: String
    $year: String
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
    updateOperatingSystem(id: $id) {
      id
    }
  }
`;
