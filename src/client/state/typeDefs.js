const typeDefs = [
  `
  type Auth {
    token: String!
    user: User!
  }

  input Filter {
    skip: Int
    after: String
    before: String
    first: Int
    last: Int
  }

  type Query {
    auth: Auth
  }
`
];
export default typeDefs;
