import gql from "graphql-tag";

export const GET_BRAND = gql`
  query getBrand($id: ID!) {
    band(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_BRANDS = gql`
  {
    brands {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_BRAND = gql`
  mutation createBrand($name: String) {
    createBrand(name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_BRAND = gql`
  mutation updateBrand($id: ID!, $name: String) {
    updateBrand(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_BRAND = gql`
  mutation deleteBrand($id: ID!) {
    deleteBrand(id: $id) {
      id
    }
  }
`;
