import React from 'react';
import { Container } from '../style/StyledPage.style';
import Header from '../Header/Header';

const MainLayout = (props) => {
    return (<>
        <Container>
            <Header />
        </Container>
        <Container>
            {props.children}
        </Container>
    </>
    )
}

export default MainLayout