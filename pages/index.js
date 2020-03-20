import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import 'cross-fetch/polyfill';

import Global from './styles/global.style'
import Page from '../component/Page'
import MainLayout from '../component/layouts/MainLayouts'
import Location from './Location' 

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
      <MainLayout> 
        <Page />
        <Location/>
      </MainLayout> 
    </ApolloProvider>
  )
}

export default App

{/* <Global />
        <Page />  */}