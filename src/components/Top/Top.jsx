import React from "react";
import styled from "styled-components";
import Image from "../../assets/aerolab-logo.svg";
import Profile from './Profile';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.img`
  position: absolute;
  width: 2rem;
  height: 1.8rem;
  left: 42px;
  top: 22px;
`;

function Top() {
  return (
    <Container>
      <Logo src={Image} />
      <Profile />
    </Container>
  );
}

export default Top;