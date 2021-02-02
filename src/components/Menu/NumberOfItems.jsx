import React from 'react'
import styled from "styled-components";

const Container = styled.p`

font-family: 'Source Sans Pro';
font-style: normal;
font-weight: normal;
font-size: 24px;
color: #616161;
align-self: center;
`;

function NumberOfItems({numberOfProducts, actualPage}) {
    return (
        <Container>
            { actualPage * 16 } of {numberOfProducts} products
        </Container>
    )
}

export default NumberOfItems
