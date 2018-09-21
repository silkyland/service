import gql from "graphql-tag";

export const GET_ISSUE = gql`
  query getIssue($id: ID!) {
    getIssue(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_ISSUES = gql`
  {
    issues {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_ISSUE = gql`
  mutation updateIssue($id: ID!, $name: String) {
    updateIssue(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAT
    }
  }
`;

export const DELETE_ISSUE = gql`
  mutation deleteIssue($id: ID!) {
    deleteIssue(id: $id) {
      id
    }
  }
`;
