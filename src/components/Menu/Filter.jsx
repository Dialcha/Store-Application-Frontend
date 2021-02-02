import React from "react";
import styled from "styled-components";
import { sortProductsByPrice } from "../../redux/actions";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  background: #ededed;
  border-radius: 20.5px;
  align-items: center;
  box-sizing: content-box;
  margin: 20px 10px;
  padding: 10px;
  cursor: pointer
`;

const Title = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  /* identical to box height, or 200% */

  letter-spacing: -0.15px;

  color: #a3a3a3;
`;

function Filter({ title, filterValue, products, orderProducts }) {
  return (
    <Container onClick={() => orderProducts(products, filterValue)} >
      <Title>{title}</Title>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderProducts: (products, sort) =>
      dispatch(sortProductsByPrice(products, sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
