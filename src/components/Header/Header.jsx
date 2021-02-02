import React from "react";
import styled from "styled-components";
import Image from "../../assets/header-x1.png";

const Container = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${Image});
  background-size: 100% 100%;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  padding-left: 10%;
  align-self: flex-end;

  color: #fff;
`;

function Header({title}) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Header;
