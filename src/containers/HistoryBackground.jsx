import React from 'react'
import Top from '../components/Top/Top';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import styled from "styled-components";
import Products from './Products.jsx';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #F9F9F9;
`

function HistoryBackground() {
    return (
        <Container>
            <Top/>
            <Header title={'Rewards History'}/>
            <Menu/>
            <br></br>
        </Container>
    )
}

export default HistoryBackground;