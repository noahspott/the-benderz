import pkg from "@apollo/client";
const { ApolloClient, InMemoryCache } = pkg;
import { GRAPHQL_URL } from "../data/consts";

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
