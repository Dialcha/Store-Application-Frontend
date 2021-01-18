import React from 'react'
import styled from "styled-components";
import Img from "../../assets/product-pics/iPhone8-x1.png";

const Container = styled.div`
    width: 91%;
    height: 66%;
    align-self: center;
`;

const ProductImg = styled.img`

`;

function Photo() {
    return (
        <Container>
            <ProductImg src={Img}></ProductImg>
        </Container>
    )
}

export default Photo
