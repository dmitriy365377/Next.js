import React from 'react';
import { graphql } from 'react-apollo'
import MainLayout from '../component/layouts/MainLayouts';
import fetchLocation from '../queries/FetchLocation'

const Location = (props) => {
   console.log(props)
    return (
        <>
            <MainLayout>
                <h1>Contact</h1>
            </MainLayout>
        </>
    )
}

 

export default graphql(fetchLocation, { 
    options: (props) => {
        return {
            variables: { type: props }
        }
    }
})(Location);