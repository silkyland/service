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
import { setContext } from "apollo-link-context";

const link = new HttpLink({
  uri: config.graphql.clientUrl
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTM4MTAzNzQyLCJleHAiOjE1Mzg3MDg1NDJ9.h6UJUtGYvZQglub75Cmrbl9PUOIuRJb6v94vFjW__-E"
    }
  };
  // authorization: token ? `Bearer ${token}` : ""
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
  link: from([linkState, errorLink, authLink.concat(link)]),
  cache
});

export default client;
