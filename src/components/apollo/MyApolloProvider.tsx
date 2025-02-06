import pkg from "@apollo/client";
const { ApolloProvider } = pkg;
import client from "../../lib/apolloClient";

export default function MyApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
