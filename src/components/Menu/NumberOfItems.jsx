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

function NumberOfItems({numberOfProducts}) {
    return (
        <Container>
            {numberOfProducts}
        </Container>
    )
}

export default NumberOfItems
