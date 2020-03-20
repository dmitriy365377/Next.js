import React from 'react';
import LocationDetail from '../component/LocationDetail/LocationDetail'; 

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import 'cross-fetch/polyfill';

import Global from './styles/global.style'
import Page from '../component/Page'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const client = new ApolloClient({
  cache,
  link
})

function App() {
  return (
    <ApolloProvider client={client}> 
        <Global />
        <Page /> 
    </ApolloProvider>
  )
}

export default App