import React from "react";
import Img from "../../assets/icons/buy-blue.svg";
import styled from "styled-components";

const BuyImage = styled.img`
  align-self: flex-end;
  box-sizing: border-box;
  padding-right: 12px;
  padding-top: 12px;
`;

function Icon() {
  return <BuyImage src={Img}></BuyImage>;
}

export default Icon;
