import React from "react";
import styled from "styled-components";
import CoinImg from "../../assets/icons/coin.svg"

const Container = styled.div`
  background: #616161;
  border-radius: 100px;
  align-self: flex-end;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin-top: 12px;
  margin-right: 12px;
  padding-left: 6px;
  padding-right: 6px;
`;

const Text = styled.p`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.0329412px;
  color: #ffffff;
`;

const CoinsImg = styled.img`
`;

function Missing({ points }) {
  return (
    <Container>
      <Text>You need {points}</Text>
      <CoinsImg src={CoinImg}/>
    </Container>
  );
}

export default Missing;
