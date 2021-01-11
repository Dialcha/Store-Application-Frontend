import React from "react";
import styled from "styled-components";
import Image from "../../assets/icons/coin.svg";

const Container = styled.div`
  width: 50%;
  background: #ededed; /* #ededed */
  border-radius: 20.5px;
  margin:  2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const PointsValue = styled.h1`

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.15px;
  margin-left: 5%;

  color: #616161;
`;

const PointsImg = styled.img`
  margin-left: 10%;
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


