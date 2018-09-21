import gql from "graphql-tag";

export const GET_INVENTORY = gql`
  query getInventory($id: ID!) {
    inventory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_INVENTORIES = gql`
  {
    inventories {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_INVENTORY = gql`
  mutation createInventory($name: String!) {
    createInventory(name: $name) {
      id
      name
      createdAt
      updatedAts
    }
  }
`;

export const UPDATE_INVENTORY = gql`
  mutation updateInventory($id: ID!, $name: String) {
    updateInventory(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_INVENTORY = gql`
  mutation deleteInventory($id: ID!) {
    deleteInventory(id: $id) {
      id
    }
  }
`;
