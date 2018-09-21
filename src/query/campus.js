import gql from "graphql-tag";

export const GET_CAMPUS = gql`
  query campus($id: ID!) {
    campus(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_CAMPUSES = gql`
  {
    campuses {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CAMPUS = gql`
  mutation createCampus($name: String!) {
    createCampus(name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CAMPUS = gql`
  mutation updateCampus($id: ID!, $name: String!) {
    updateCampus(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CAMPUS = gql`
  mutation deleteCampus($id: ID!) {
    deleteCampus(id: $id) {
      id
    }
  }
`;
