import React from 'react'
import Top from '../components/Top/Top';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import styled from "styled-components";
import Product from "../components/Product/Product";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #F9F9F9;
`

function Background() {
    return (
        <Container>
            <Top/>
            <Header/>
            <Menu/>
            <br></br>
            <Product/>
        </Container>
    )
}

export default Background;