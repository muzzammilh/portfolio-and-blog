import { ApolloClient, InMemoryCache } from '@apollo/client';

const apollo = new ApolloClient({
  uri: 'https://api.hashnode.com',
  cache: new InMemoryCache(),
});

export default apollo;
