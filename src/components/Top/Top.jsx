import React from "react";
import styled from "styled-components";
import Image from "../../assets/aerolab-logo.svg";
import Profile from './Profile';

const Container = styled.div`
  width: 100%;
  background: #FFFFFF;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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