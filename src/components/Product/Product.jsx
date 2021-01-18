import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Icon from "./Icon";
import Photo from "./Photo";

const Container = styled.div`
  width: 276px;
  height: 276px;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Product() {
  return (
    <>
      <Container>
        <Icon />
        <Photo />
        <Info />
      </Container>
    </>
  );
}

export default Product;
