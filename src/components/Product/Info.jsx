import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 82%;
  height: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top: 1px solid #D9D9D9;
`;


const Subtitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.0376471px;
  color: #a3a3a3;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  letter-spacing: -0.0423529px;
`;

function Info() {
  return (
    <Container>
      <Subtitle>Phones</Subtitle>
      <Title>Iphone 8</Title>
    </Container>
  );
}

export default Info;
