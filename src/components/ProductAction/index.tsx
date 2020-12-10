import React from 'react';
import { 
    Container, 
    Condition, 
    Row, 
    HeartIcon, 
    DispatchTag, 
    PriceCard, 
    PriceRow, 
    InstallmentsInfor, 
    StockStatus, 
    MethodCard, 
    CheckIcon,
    Actions,
    Button,
    Benefits,
    ShieldIcon,
} from './styles'

const ProductAction: React.FC = () => {
    return (
        <Container>
            <Condition>Novo</Condition>

            <Row>
                <h1>camiseta branca</h1>
                <HeartIcon /> 
            </Row>

            <DispatchTag>enviando Normalmente</DispatchTag>

            <PriceCard>
                <PriceRow>
                    <span className="symbol">R$</span>
                    <span className="fraction">34</span>
                    <span className="cents">99</span>
                </PriceRow>

                <InstallmentsInfor>em 3x de R$ 11,67</InstallmentsInfor>
            </PriceCard>
            <StockStatus>estoque disponível</StockStatus>

            <MethodCard>
                <CheckIcon />
                <div>
                    <span className="title">frete grátis</span>
                    <span className="details">beneficio Lorem Inpsum</span>
                    <a href="#options" className="more"></a>
                </div>
            </MethodCard>

            <Actions>
                <Button solid>comprar agora</Button>
                <Button>adicionar ao carrinho</Button>
            </Actions>
            
            <Benefits>
                <li>
                    <ShieldIcon />
                    <p>compra garantida, receba o produto ou devolvemos seu dinheiro</p>
                </li>
            </Benefits>
        </Container>
    )
}

export default ProductAction
