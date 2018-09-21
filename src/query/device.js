import gql from "graphql-tag";

export const GET_DEVICE = gql`
  query getDevice($id: ID!) {
    getDevice(id: $id) {
      id
      client {
        name
        clientType {
          name
        }
      }
      brand {
        name
      }
      name
      year
      sn
      comment
      createdAt
      updatedAt
    }
  }
`;

export const GET_DEVICES = gql`
  {
    devices {
      id
      client {
        name
        clientType {
          name
        }
      }
      brand {
        name
      }
      name
      year
      sn
      comment
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_DEVICE = gql`
  mutation createDevice(
    $clientId: Int!
    $brandId: Int!
    $deviceTypeId: Int!
    $name: String
    $year: String
    $sn: String
    $comment: String
  ) {
    createDevice(
      clientId: $clientId
      brandId: $brandId
      deviceTypeId: $deviceTypeId
      name: $name
      year: $year
      sn: $sn
      comment: $comment
    ) {
      id
      client {
        name
        clientType {
          name
        }
      }
      brand {
        name
      }
      name
      year
      sn
      comment
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_DEVICE = gql`
  mutation updateDevice(
    $id: ID!
    $clientId: Int!
    $brandId: Int!
    $deviceTypeId: Int!
    $name: String
    $year: String
    $sn: String
    $comment: String
  ) {
    updateDevice(
      id: $id
      clientId: $clientId
      brandId: $brandId
      deviceTypeId: $deviceTypeId
      name: $name
      year: $year
      sn: $sn
      comment: $comment
    ) {
      id
      client {
        name
        clientType {
          name
        }
      }
      brand {
        name
      }
      name
      year
      sn
      comment
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_DEVICE = gql`
  mutation deleteDevice($id: ID!) {
    deleteDevice(id: $id) {
      id
    }
  }
`;
