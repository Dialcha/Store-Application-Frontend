import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width: 1440px;
    height: 80px;
    left: 0px;
    top: 0px;
    background: green;
    display: flex;
`

function Top() {
  return (
      <Container>
          Top
      </Container>
  )
}

export default Top;


//  const Container = styled.div`
//  background-color: ${({ theme }) => theme.secondary};
//  position: fixed;
//  left: 0;
//  top: 0;
//  bottom: 0;
//  width: 16rem;