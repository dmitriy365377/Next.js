import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import MainLayout from '../component/layouts/MainLayouts';
import fetchLocation from '../queries/FetchLocation';
import { withApollo } from '../lib/apollo';
import { useRouter } from 'next/router';

import { Section, Container, PlanetImg, PlanetInfo, Residents, ResidentImg, PlanetInformation } from '../component/style/Location.style';

import PlanetImage from '../image/planet.svg';
import VectorImage from '../image/back.png'
import InitialLoader from '../component/Loader/InitialLoader';

const LocationPage = (props) => {
    const router = useRouter();

    const { data, error } = useQuery(
        fetchLocation,
        { variables: { name: router.query.name } }

    );

    if (error) return <p>Error :(</p>;

    if (!data || !data.locations) {
        return (
            <InitialLoader />
        )
    };
 
    return (
        <>
            <MainLayout>
                <PlanetImg>
                    <span onClick={() => router.back()}>
                        <img src={VectorImage} id="vectorImage" />
                    </span>
                    <img src={PlanetImage} id="planetImage" />
                </PlanetImg>
                <PlanetInfo>
                    <h3>{data.locations.results[0].name}</h3>
                    <p>{data.locations.results[0].type}</p>
                </PlanetInfo>
                <Residents>
                    Residents
                </Residents>
                <LocationContent data={data} />
            </MainLayout>
            <style jsx>{` 

                    #vectorImage{
                         width:100px
                    }

                    #planetImage{
                        margin: 0 auto
                    }

                    @media(max-width: 768px) {
                        #planetImage{
                            width:100%;
                        }
                        
                        #vectorImage{
                            position: absolute;
                            left: 40px;
                       }
                    }  
                    `}
            </style>
        </>
    )
}

function LocationContent({ data }) {
    const router = useRouter();

    return (
        <>
            {
                data.locations.results[0].residents.map((item, i) => {
                    return (
                        <Section key={item.id}>
                            <Container>
                                <ResidentImg>
                                    <span onClick={() => router.push({
                                        pathname: '/character',
                                        query: {
                                            id: item.id
                                        },
                                    })}>
                                        <img src={item.image} id="residentImage" />
                                    </span>
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

                    @media(max-width:768px) {
                        #residents{ 
                            width:28%
                        }
                        
                        #residentImage {
                            width: 100%
                        }  
                    }
 
                    @media(max-width:768px) {
                        p { 
                            font-size: 40px;
                        }    
                    }
            `}
            </style>
        </>
    )
}

export default withApollo({ ssr: true })(LocationPage);

