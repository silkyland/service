import { ApolloClient } from "apollo-client";
import config from "../config";
import { InMemoryCache } from "apollo-cache-inmemory";

import { HttpLink } from "apollo-link-http";
import { ApolloLink, from } from "apollo-link";
import { onError } from "apollo-link-error";

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

const cache = new InMemoryCache({
  dataIdFromObject: result => {
    console.log("result in apolloClient.js = ", result);
    if (result.__typename != null && result.id != null) {
      return `${result.__typename}-${result.id}`;
    }
    return null;
  }
});
const client = new ApolloClient({
  link: from([errorLink, link]),
  cache
});

export default client;
