import React from 'react'
import { Container } from './style/StyledPage.style'

import Header from './Header/Header'
import Content from './Content/Content'  

const Page = () => {
    return (
        <Container>
            <Header />
            <Content />
            <Content />
            <Content />
            <Content />
        </Container>
    )
}


export default Page