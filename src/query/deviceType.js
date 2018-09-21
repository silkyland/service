import gql from "graphql-tag";

export const GET_DEVICE_TYPE = gql`
  query getDeviceType($id: ID!) {
    getDeviceType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const GET_DEVICE_TYPES = gql`
  {
    deviceTypes {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_DEVICE_TYPE = gql`
  mutation updateDeviceType($id: ID!, $name: String) {
    updateDeviceType(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_DEVICE_TYPE = gql`
  mutation deleteDeviceType($id: ID!) {
    deleteDeviceType(id: $id) {
      id
    }
  }
`;
