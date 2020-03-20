import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Waypoint } from 'react-waypoint';


import { Container } from './style/StyledPage.style';
import InitialLoader from '../component/Loader/InitialLoader';
import DataUploadLoader from '../component/Loader/DataUploadLoader';

 
import Content from './Content/Content';

import gql from 'graphql-tag';



const GET_LAUNCHES = gql`
    query locationList($page:Int  ){   
        locations(page:$page ) { 
            results{
                id
                name
                type
             residents{
                 image
                 id
             }
         }
         info{
              pages
             count 
             prev
              next
            }
     }
    }
`;

const Page = () => {
  const { data, loading, error, fetchMore, networkStatus } = useQuery(GET_LAUNCHES, { notifyOnNetworkStatusChange: true });

  console.log(data)
  if (!data || !data.locations) {
    return (
      <InitialLoader />
    )
  }

  if (error) return <p>Error :(</p>;


  return (
    <Container> 
      {
        data.locations.results.map((item, i) => {
          return (
            <React.Fragment key={item.id}> 
              <Content item={item} />
              {i === data.locations.results.length - 1 && (
                <>
                  <Waypoint onEnter={() => fetchMore({  
                    variables: {
                      page: data.locations.info.next,
                    },
                    updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                      if (!fetchMoreResult) return prev;
                      return {
                        locations: {
                          __typename: "Location",
                          results: [
                            ...prev.locations.results,
                            ...fetchMoreResult.locations.results,
                          ],
                        },
                      };
                    },
                  })}
                  />
                </>
              )}
            </React.Fragment>
          )
        })
      }

      {networkStatus === 3 && loading && <DataUploadLoader />}

    </Container>
  );
}



export default Page

