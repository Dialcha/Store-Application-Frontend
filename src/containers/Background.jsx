import React from 'react'
import Top from '../components/Top/Top';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    max-height: 412px;
    left: 0px;
    top: 0px;

`

function Background() {
    return (
        <div>
            <Top/>
            <Header/>
            <Menu/>
        </div>
    )
}

export default Background;