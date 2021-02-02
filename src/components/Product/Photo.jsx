import React from 'react'
import styled from "styled-components";
import Img from "../../assets/product-pics/iPhone8-x1.png";

const Container = styled.div`
    width: 91%;
    height: 55%;
    align-self: center;
    display: flex;
`;

const ProductImg = styled.img`
    width: 100%;
`;

const ProductImgHoover = styled.img`
    width: 100%;
    opacity: 0.2
`;

function Photo({hoover, image}) {
    return (
        <Container>
            {
                hoover ? <ProductImgHoover src={image} /> : <ProductImg src={image} /> 
            }
            
        </Container>
    )
}

export default Photo
