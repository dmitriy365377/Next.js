import React from 'react';
import { Section, Container, Planet, PlanetInformation, Residents } from '../style/Content.style'
import PlanetImage from '../../image/planet.svg'
import Link from 'next/link';

const Content = (props) => {
    
    return (
        <Section>
            <Container>
                <Planet>
                    <Link href={{
                        pathname: '/location',
                        query: {
                            name: props.item.name
                        }
                    }}>
                        <a>
                            <img src={PlanetImage} id="planetImage" />
                        </a>
                    </Link>
                </Planet>
                <PlanetInformation>
                    <h3>{props.item.name}</h3>
                    <p>{props.item.type}</p>
                    <Residents>
                        {props.item.residents
                            .filter((item, idx) => idx < 3)
                            .map((item) => (
                                < img key={item.id} src={item.image} id="residents" />
                            ))
                        }
                    </Residents>
                </PlanetInformation>

            </Container>
            <style jsx>{`
                #planetImage {
                    width:100%
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
        </Section>
    )
}


export default Content
