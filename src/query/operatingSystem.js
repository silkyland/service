import gql from "graphql-tag";

export const GET_OPERATING_SYSTEMS = gql`
  {
    operatingSystems {
      id
      name
      build
      year
      comment
      createdAt
      updatedAt
    }
  }
`;
