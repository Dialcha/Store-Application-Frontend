import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import NumberOfItems from "./NumberOfItems";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  align-self: center;
  justify-content: space-around;
`;

const BottomLine = styled.div `
  width: 80%;
  height: 1px;
  background: #D9D9D9;
  align-self: center;
`;

const VerticalLine = styled.div`
  background: #d9d9d9;
  width: 1px;
  height: auto;
  box-sizing: border-box;
  margin: 5px;
`;

const SecondaryText = styled.h2`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.15px;
  color: #a3a3a3;
  align-self: center;
`;

function Menu() {
  return (
    <>
    <Container>
      <NumberOfItems numberOfProducts="16 of 32 products"></NumberOfItems>
      <VerticalLine />
      <SecondaryText>Sort by:</SecondaryText>
      <Filter title="Most Recent" />
      <Filter title="Lowest Price" />
      <Filter title="Highest Price" />
    </Container>
    <BottomLine/>
    </>
  );
}

export default Menu;
