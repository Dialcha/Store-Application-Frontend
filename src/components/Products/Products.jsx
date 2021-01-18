import React from 'react'
import styled from "styled-components";
import Product from '../Product/Product';
import ProductReedem from '../Product/ProductReedem';

const Container = styled.div`
    display: flex;
    width: 82%;
    flex-wrap: wrap;
    align-self: center;
`;

function Products() {
    return (
        <Container>
            <Product/>
            <ProductReedem/>
            <Product/>
            <Product/>
            <Product/>
        </Container>
    )
}

export default Products
