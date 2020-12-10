import React from 'react';

import tShirtImage from '../../assets/tshirt.png'
import SellerInfo from '../sellerInfo'
import ProductAction from '../ProductAction'
import { 
    Container, 
    Row, 
    Panel, 
    Column, 
    Gallery, 
    Section, 
    Description 
} from './styles'

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#Share" >compartilhar</a>
                <a href="#Sale"> vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img alt="t-Shirt" src={tShirtImage}></img>
                    </Gallery>

                    <Info />
                </Column>

                <Column>
                    <ProductAction />
                    <SellerInfo />

                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection />
                </Column>
            </Panel>
        </Container>
    )
}

const WarrantySection = () => {
    return (
        <Section>
            <h4>Garantia</h4>

            <div>
                <span>
                    <p className="title">compra garantida</p>
                    <p className="description">receba o produto ou devolvemos seu dinheiro</p>
                </span>

                <span>
                    <p className="title">garantia do vendedor</p>
                    <p className="description">sem garantia</p>
                </span>
            </div>
            <a href="#saibaMais">saiba mais sobre a garantia</a>
        </Section>
    )
}

const Info = () => {
    return (
        <Description>
            <h2>descrição</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis ornare lacus, sit amet ultrices nibh molestie vel. Nullam eros elit, bibendum ut urna in, sagittis mollis ex. Sed et risus a enim ultrices feugiat. Praesent elementum diam eget nulla accumsan, at lacinia felis suscipit. Maecenas at bibendum lacus. Nullam eget velit eget purus commodo cursus sit amet vitae tortor. Proin aliquam placerat tincidunt. In hac habitasse platea dictumst. Pellentesque dignissim eros lectus, ut finibus ipsum ultrices non.
            <br />
                <br />
            itens inclusos
            -1z LED <br />
            -1z LED <br />
            -1z LED <br />
            -1z LED <br />
            -1z LED <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis ornare lacus, sit amet ultrices nibh molestie vel. Nullam eros elit, bibendum ut urna in, sagittis mollis ex. Sed et risus a enim ultrices feugiat. Praesent elementum diam eget nulla accumsan, at lacinia felis suscipit. Maecenas at bibendum lacus. Nullam eget velit eget purus commodo cursus sit amet vitae tortor. Proin aliquam placerat tincidunt. In hac habitasse platea dictumst. Pellentesque dignissim eros lectus, ut finibus ipsum ultrices non.
        </p>
        </Description>
    )
}

export default Product