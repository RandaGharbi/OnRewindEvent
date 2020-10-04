import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
import withApollo from 'next-with-apollo';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

function createClient({ headers }) {
  const cache = new InMemoryCache({ fragmentMatcher });
  return new ApolloClient({
    uri: process.env.GRAPHQL_URL ||'https://staging-graphql-service.onrewind.tv/graphql',
    request: (operation) => {
      operation.setContext({
        headers: {
          ...headers,
          'x-account-key': process.env.X_ACOUNT_KEY || 'ryHvne_jFV' ,
        },
      });
    },
    cache,
    onError: () => {},
  });
}

export default withApollo(createClient);
