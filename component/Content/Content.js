import React from 'react';
import { Section, Container, Planet, PlanetInformation, Residents } from '../style/Content.style'
import PlanetImage from '../../image/planet.svg'
import image1 from '../../image/image1.svg'

const Content = () => {
    return (
        <Section>
            <Container>
                <Planet>
                    <img src={PlanetImage} id="planetImage" />
                </Planet>
                <PlanetInformation>
                    <h3>Earth (C-137)</h3>
                    <p>Planet</p>
                    <Residents>
                        <img src={image1} id="residents" />
                        <img src={image1} id="residents" />
                        <img src={image1} id="residents" />
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
