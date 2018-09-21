import gql from "graphql-tag";

export const GET_DEPARTMENT = gql`
  query getDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      campus {
        id
        name
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_DEPARTMENTS = gql`
  {
    departments {
      id
      campus {
        id
        name
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_DEPARTMENT = gql`
  mutation updateDepartment($id: ID!, $campusId: Int!, $name: String) {
    updateDepartment(id: $id, campusId: $campusId, name: $name) {
      id
      campus {
        id
        name
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation deleteDepartment($id: ID!) {
    deleteDepartment(id: $id) {
      id
    }
  }
`;
