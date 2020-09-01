import React from "react";
import styled from "styled-components";
import Image from "../../assets/header-x1.png";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  left: 0px;
  top: 80px;
  background-image: url(${Image});
  background-size: 100% 100%; ;
  display: flex;
  align-content: flex-end;
`;
// ajustar background-size a 20%

const Title = styled.h1`
  position: absolute;
  height: 80px;
  left: 9.17%;
  right: 69.03%;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 80px;

  color: #FFF;
`;

function Header() {
  return (
    <Container>
        <Title>Electronics</Title>
    </Container>
  );
}

export default Header;
