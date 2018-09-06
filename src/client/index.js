import ApolloClient from "apollo-boost";
import config from "../config";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: config.graphql.clientUrl,
  cache
});

export default client;
