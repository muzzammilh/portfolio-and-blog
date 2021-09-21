// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/

import { ApolloClient, InMemoryCache } from '@apollo/client';

const apollo = new ApolloClient({
  uri: 'https://api.hashnode.com',
  cache: new InMemoryCache(),
});

export default apollo;
