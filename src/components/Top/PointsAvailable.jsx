import React from "react";
import styled from "styled-components";
import Image from "../../assets/icons/coin.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background: #ededed; /* #ededed */
  border-radius: 20.5px;
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  padding-left: 15px;
`;

const PointsValue = styled.h1`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.15px;
  margin-left: 5%;
  align-self: flex-;
  color: #616161;
`;

const PointsImg = styled.img`
  margin-left: 10%;
`;

function PointsAvailable({pointsValue}) {

  return (
    <Link to="/points">
      <Container>
        <PointsValue>{pointsValue}</PointsValue>
        <PointsImg src={Image}></PointsImg>
      </Container>
    </Link>
  );
}

export default PointsAvailable;
