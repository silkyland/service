import gql from "graphql-tag";

export const ALL_USER_TYPES = gql`
  {
    userTypes {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
