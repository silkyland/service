import { ApolloClient } from "apollo-client";
import config from "../config";
import { InMemoryCache } from "apollo-cache-inmemory";

import { HttpLink } from "apollo-link-http";
import { ApolloLink, from } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { onError } from "apollo-link-error";
import defaults from "./state/defaults";
import resolvers from "./state/resolvers";
import typeDefs from "./state/typeDefs";

const link = new HttpLink({
  uri: config.graphql.clientUrl
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache();

const linkState = new withClientState({
  cache,
  resolvers,
  typeDefs,
  defaults
});
const client = new ApolloClient({
  link: from([linkState, errorLink, link]),
  cache
});

export default client;
