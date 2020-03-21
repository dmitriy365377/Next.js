import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import MainLayout from '../component/layouts/MainLayouts';
import fetchLocation from '../queries/FetchLocation'
import { withApollo } from '../lib/apollo'
import { useRouter } from 'next/router'


import { Section, Container, PlanetImg, PlanetInfo, Residents, ResidentImg, PlanetInformation } from '../component/style/Location.style';

import PlanetImage from '../image/planet.svg'
import InitialLoader from '../component/Loader/InitialLoader'

const LocationPage = (props) => {
    const router = useRouter();
    const { data } = useQuery(fetchLocation, { variables: { name: router.query.name } });
     
    if (!data || !data.locations) {
        return (
          <InitialLoader />
        )
      }

    return (
        <>
            <MainLayout>
                <PlanetImg>
                    <img src={PlanetImage} id="planetImage" />
                </PlanetImg>
                <PlanetInfo>
                    <h3>{data.locations.results[0].name}</h3>
                    <p>{data.locations.results[0].type}</p>
                </PlanetInfo>
                <Residents>
                    Residents
                </Residents>
                {
                    data.locations.results[0].residents.map((item, i) => {
                        return (
                            <Section key={item.id}>
                                <Container>
                                    <ResidentImg>
                                        <img src={item.image} id="residentImage" />
                                    </ResidentImg>
                                    <PlanetInformation>
                                     <h2>{item.name}</h2>
                                     <p>{item.location.name}</p>
                                     <p>{item.location.type}</p>
                                    </PlanetInformation>
                                </Container>
                            </Section>
                        )
                    })
                }
            </MainLayout>
            <style jsx>{` 
                    #residentImage {
                        width: 80%
                    }
            

                #residents{
                    margin: 0 2%;
                    width:20%
                }

                p {
                    margin: 5% 0;
                    color: #DCDCDC;
                    font-size: 18px;
                }
            `}
              </style>
        </>
    )
}

export default withApollo({ ssr: true })(LocationPage);

 