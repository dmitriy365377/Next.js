import React from 'react';
import 'cross-fetch/polyfill';

 
import Page from '../component/Page'
import MainLayout from '../component/layouts/MainLayouts'
 
import { withApollo } from '../lib/apollo'

function IndexPage() {
  return (
    <> 
      <MainLayout> 
        <Page /> 
      </MainLayout>
      </>
  )
}

export default withApollo()(IndexPage);
 