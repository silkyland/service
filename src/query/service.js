import gql from "graphql-tag";

export const GET_SERVICE = gql`
  query getService($id: ID!) {
    getService(id: $id) {
      id
      User {
        id
        name
      }
      Issue {
        id
        name
      }
      Status {
        id
        name
      }
      Device {
        name
        Client {
          name
        }
      }
      comment
      createdAt
      updatedAt
    }
  }
`;

export const GET_SERVICES = gql`
  {
    services {
      id
      user {
        id
        name
        userType {
          name
        }
      }
      issue {
        id
        name
      }
      status {
        id
        name
      }
      device {
        name
        deviceType {
          name
        }
        brand {
          name
        }
        client {
          name
          clientType {
            name
          }
          department {
            name
          }
          stdId
          idCard
          thumbnail
          email
          mobile
          phone
          line
        }
      }
      operatingSystems {
        id
        name
        version
        build
        year
      }
      inventories {
        id
        name
      }
      offices {
        name
        version
        version
        comment
      }
      applications {
        id
        name
        version
        comment
      }
      comment
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation createService(
    $userId: Int!
    $issueId: Int!
    $statusId: Int!
    $deviceId: Int!
    $comment: String
  ) {
    createService(
      userId: $userId
      issueId: $issueId
      statusId: $statusId
      deviceId: $deviceId
      comment: $comment
    ) {
      id
      User {
        id
        name
      }
      Issue {
        id
        name
      }
      Status {
        id
        name
      }
      Device {
        name
        Client {
          name
        }
      }
      comment
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SERVICE = gql``;

export const DELETE_SERVICE = gql``;
