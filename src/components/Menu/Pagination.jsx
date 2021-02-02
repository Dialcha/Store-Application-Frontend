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
`;
const ArrowRightButton = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  align-self: center;
`;

function Pagination({ products, history }) {
    useEffect(() => {
        console.log('PRODUCTOS EN LA PAGINACIÓN: ', products)
      }, [history, products]);
  return (
    <>
      <ArrowLeftButton src={ArrowLeft} onClick={() => products.prev()}/>
      <ArrowRightButton src={ArrowRight} onClick={() => products.next()}/>
    </>
  );
}

export default withRouter(Pagination);
