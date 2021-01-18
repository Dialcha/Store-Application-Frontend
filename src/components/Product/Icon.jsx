import React from "react";
import ImgBlue from "../../assets/icons/buy-blue.svg";
import ImgWhite from "../../assets/icons/buy-white.svg";
import styled from "styled-components";

const BuyImage = styled.img`
  align-self: flex-end;
  box-sizing: border-box;
  padding-right: 12px;
  padding-top: 12px;
`;

function Icon({imgBlue}) {
  return <BuyImage src={imgBlue ? ImgBlue : ImgWhite}></BuyImage>;
}

export default Icon;
