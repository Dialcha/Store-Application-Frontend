import React from 'react'
import Top from '../components/Top/Top';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import styled from "styled-components";

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus id nostrum doloremque odit enim exercitationem dolor porro repellendus reprehenderit, dolore, illum provident ducimus veritatis eius modi! Atque eligendi officiis laboriosam.</p>
        </Container>
    )
}

export default Background;