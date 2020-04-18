import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import config from "../../apollo.config";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      ssrMode: true,
      link: new HttpLink({
        uri: config.client.service.url,
        headers: config.client.service.headers,
      }),
      cache: new InMemoryCache().restore(initialState || {}),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
        mutate: {
          errorPolicy: "all",
        },
      },
    })
);
