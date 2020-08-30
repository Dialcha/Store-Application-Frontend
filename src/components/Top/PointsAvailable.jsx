import React from "react";
import styled from "styled-components";
import Image from "../../assets/icons/coin.svg";

const Container = styled.div`
  position: absolute;
  right: 3%;
  top: 10%;
  margin-top: 10px;
  bottom: 0%;
  width: 50%;
  background: #ededed;
  border-radius: 20.5px;
  display: flex;
  order: 2;
  align-content: center;
`;

const PointsValue = styled.h1`
  position: absolute;
  height: 1rem;
  top: -10%;
  left: 5%;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.15px;

  color: #616161;
`;

const PointsImg = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 25%;
  left: 75%;
`;

function PointsAvailable() {
  return (
      <Container>
          <PointsValue>6000</PointsValue>
          <PointsImg src={ Image }></PointsImg>
      </Container>
  );
}

export default PointsAvailable;
