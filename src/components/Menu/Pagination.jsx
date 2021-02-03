import React, { useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";

const ArrowLeftButton = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  align-self: center;
  &:hover {
    background:#a3a3a3;
  }
`;
const ArrowRightButton = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  align-self: center;
  &:hover {
    background:#a3a3a3;
  }
`;

function Pagination({ products, history }) {
    useEffect(() => {
      }, [history, products]);
  return (
    <>
      <ArrowLeftButton src={ArrowLeft} onClick={() => products.prev()}/>
      <ArrowRightButton src={ArrowRight} onClick={() => products.next()}/>
    </>
  );
}

export default withRouter(Pagination);
