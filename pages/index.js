import React from 'react';
import 'cross-fetch/polyfill';

import Global from './styles/global.style'
import Page from '../component/Page'
import MainLayout from '../component/layouts/MainLayouts'
import Location from './location' 
import { withApollo } from '../lib/apollo'

function IndexPage() {
  return (
    <>
      <Global />
      <MainLayout> 
        <Page />
        {/* <Location/> */}
      </MainLayout>
      </>
  )
}

export default withApollo()(IndexPage);
 