import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Photo from "./Photo";

const Container = styled.div`
  width: 23%;
  height: 276px;
  background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 0 1% 1.6%;
  box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.4);
`;

function ProductReedem() {
  return (
    <Container>
        <Icon imgBlue={false}/>
        <Photo hoover={true} />
    </Container>
    );
}

export default ProductReedem;
