import React from 'react'

import { Container, LoadingDiv } from './style/StyledPage.style'
import LoadingGif from '../image/loading2.gif'

import Header from './Header/Header'
import Content from './Content/Content'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const Page = () => (
    <Query
        query={gql`
    query {
        locations{
            results{
               id
              name
             type
             residents{
                 image
                 id
             }
         }
     }
    }
  `}
    >

        {({ loading, error, data }) => {
            for (let key in arguments[0])
                console.log(key, arguments[0][key]);
            console.log('data', data)

            if (loading) return (
                <div>
                    <img src={LoadingGif} id="pageLoading" />
                    <style jsx>{`
                 div {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                } 
            `}
                    </style>
                </div>
            )
            if (error) return <p>Error :(</p>;

            return (
                <Container>
                    <Header />
                    {
                        data.locations.results.map((item) => {
                            return <Content key={item.id} item={item} />
                        })
                    }
                </Container>
            );
        }}

    </Query>
)

export default Page

