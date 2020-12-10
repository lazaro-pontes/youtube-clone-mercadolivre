import React from "react";

import {
    Container,
    Title,
    ReputationCard,
    LocationCard,
    LocationIcon,
    ReputationThermometer,
    ReputationRow, 
    SupportIcon,
    ClockIcon,
    More
} from "./styles";

const sellerInfo: React.FC = () => {
    return (
        <Container>
            <Title> informações do vendedor </Title>
            <LocationCard>
                <LocationIcon />
                <div>
                    <p>localização</p>
                    <strong>Fortaleza, Ceará</strong>
                </div>
            </LocationCard>

            <ReputationCard>
                <ReputationThermometer>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li className="active" />
                </ReputationThermometer>

                <ReputationRow>
                    <div>
                        <strong>561</strong>
                        <span>vendas do ultimo mês</span>
                    </div>

                    <div>
                        <strong><SupportIcon /></strong>
                        <span>presta um bom atendimento</span>
                    </div>

                    <div>
                        <strong><ClockIcon /></strong>
                        <span></span>
                    </div>
                </ReputationRow>
            </ReputationCard>

            <More href="#">Ver mais informções do vendedor</More>
        </Container>
    )
};

export default sellerInfo;