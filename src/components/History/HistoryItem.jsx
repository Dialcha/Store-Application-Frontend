import React from "react";
import styled from "styled-components";
import Info from "../Product/Info";
import Photo from "../Product/Photo";

const Container = styled.div`
  width: 23%;
  height: 276px;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 0 1% 1.6%;
`;

function HistoryItem({ photo, category, name }) {
  return (
    <>
      <Container>
        <Photo hoover={false} image={photo} />
        <Info category={category} name={name} />
      </Container>
    </>
  );
}

export default HistoryItem;
