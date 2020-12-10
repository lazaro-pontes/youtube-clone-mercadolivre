import React from 'react';
import Header from '../Header'
import { Container, Wrapper } from './styles';
import Product from '../Product'
import Footer from '../Footer'

const layout: React.FC = () => {
    return (
        <Container>
            <Header />
            <Wrapper>
                <Product />
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default layout