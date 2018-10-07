import ApolloClient from "apollo-boost";
import config from "../config";
import defaults from "./state/defaults";
import resolvers from "./state/resolvers";
import typeDefs from "./state/typeDefs";

const client = new ApolloClient({
  uri: config.graphql.clientUrl,
  request: async operation => {
    const auth = (await JSON.parse(localStorage.getItem("auth"))) || "";
    operation.setContext({
      headers: { Authorization: auth.token ? `Bearer ${auth.token}` : "" }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  },
  clientState: {
    defaults,
    typeDefs,
    resolvers
  },
  connectToDevTools: true
});

export default client;
