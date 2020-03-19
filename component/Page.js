import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { Waypoint } from 'react-waypoint';

import { Container, LoadingDiv } from './style/StyledPage.style'
import LoadingGif from '../image/loading2.gif'
import Gif from '../image/loading.gif'

import Header from './Header/Header'
import Content from './Content/Content'

import gql from 'graphql-tag'



const GET_LAUNCHES = gql`
    query locationList($page:Int ){   
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
 
  if (!data || !data.locations) {
    return (
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
  } 

  if (error) return <p>Error :(</p>;

  console.log(networkStatus)
 
  return (
    <Container>
      <Header />
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

      {networkStatus === 3 && loading && <>
        <img src={Gif} id="pageLoading" />
        <style jsx>{`
             #pageLoading {
              margin: 20px auto;
              width: 70%;
              } 
            `}
        </style>
      </>}

    </Container>
  );
}
 


export default Page


 // if (loading) {
  //   return (
  //     <div>
  //       <img src={LoadingGif} id="pageLoading" />
  //       <style jsx>{`
  //                div {
  //                   height: 100vh;
  //                   display: flex;
  //                   align-items: center;
  //                   justify-content: center;
  //               } 
  //           `}
  //       </style>
  //     </div>
  //   )
  // }

// const Page = () => (
//   <Query
//     query={gql`
//     query {
//         locations{
//             results{
//                id
//               name
//              type
//              residents{
//                  image
//                  id
//              }
//          }
//      }
//     }
//   `}
//   >

//     {({ loading, error, data }) => {
//       for (let key in arguments[0])
//         console.log(key, arguments[0][key]);
//       console.log('data', data)

//       if (loading) return (
//         <div>
//           <img src={LoadingGif} id="pageLoading" />
//           <style jsx>{`
//                  div {
//                     height: 100vh;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                 } 
//             `}
//           </style>
//         </div>
//       )
//       if (error) return <p>Error :(</p>;

//       return (
//         <Container>
//           <Header />
//           {
//             data.locations.results.map((item) => {
//               return <Content key={item.id} item={item} />
//             })
//           }

//           {/* {loading && <li>Loading...</li>}

//                     {!loading && (<div ref={setElement}>
//                         <img src={Gif} id="pageLoading" />
//                     </div> */}
//                     )}
//         </Container>
//       );
//     }}

//   </Query>
// )

// function View() {
//   return (
//     <div></div>
//   )
// }




// import React, { useState, useEffect } from 'react';
// import { Container } from './style/StyledPage.style';

// import Header from './Header/Header';
// import Content from './Content/Content';
 
 
  
// // const Page = () => {
// //   // const [state, setState] = useState({ data: [], page: 1, total_pages: null })

// //   // const loadData = ( ) => {
// //   //   const { page, data } = state

// //   //   axios({
// //   //     url: 'https://rickandmortyapi.com/graphql/',
// //   //     method: 'post',
// //   //     data: {
// //   //       query: `
// //   //               query {
// //   //                   locations(page:${page}) { 
// //   //                       results {
// //   //                         id
// //   //                         name
// //   //                         residents{
// //   //                           id
// //   //                           image
// //   //                         }
// //   //                       }
// //   //                    }
// //   //               }
// //   //             `
// //   //     }
// //   //   }).then((result) =>
// //   //     setState({
// //   //       data: result.data,
// //   //       scrolling: false,
// //   //       total_pages: result.total_pages
// //   //     })
// //   //   )
// //   // }

// //   // useEffect(() => {
// //   //   loadData()
// //   // }, []);
// //   const [state, setState] = useState({ info: [] })

// //    useEffect(() => {
// //     const info = loadData(1)
// //     setState({info})
// //   }, []);

// //   return (
// //     <Container>
// //       <Header />
// //       {console.log(state)}
// //       {
// //         state.data.locations.results.map((item) => {
// //           return <Content key={item.id} item={item} />
// //         })
// //       }
// //     </Container>
// //   );
// // }


