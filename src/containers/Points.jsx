import React from 'react'
import Top from '../components/Top/Top';
import styled from "styled-components";
import ReedemMenu from '../components/ReedemMenu/ReedemMenu';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #14dcfc;
`

function Points() {
    return (
        <Container>
            <Top/>
            <ReedemMenu />
        </Container>
    )
}

export default Points
