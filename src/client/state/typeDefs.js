const typeDefs = [
  `
  type Auth {
    token: String!
    user: User!
  }

  type Query {
    auth: Auth
  }
`
];
export default typeDefs;
