import React, { useEffect } from "react";
import Top from "../components/Top/Top";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import styled from "styled-components";
import Products from "../components/Products/Products";
import { connect } from "react-redux";
import {
    getProducts,
    redeemUserPoints,
    sortProductsByPrice,
  } from "../redux/actions";
import usePagination from "../hooks/pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
`;

function Background({
  getAllProducts,
  products,
  getPoints,
  user,
  points,
  sortProducts,
}) {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const paginatedProducts = usePagination(products.products, 16);
  const splicedProducts = paginatedProducts.currentData();
  console.log('Spliced products: ', splicedProducts)

  return (
    <Container>
      <Top />
      <Header title={"Electronics"} />
      <Menu allProducts={products.products} products={paginatedProducts}/>
      <br></br>
      <Products getAllProducts={getAllProducts} products={splicedProducts} sortProducts={sortProducts}/>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer,
    user: state.usersReducer,
    points: state.pointsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getProducts()),
    getPoints: (id) => dispatch(redeemUserPoints(id)),
    sortProducts: (items, sort) => dispatch(sortProductsByPrice(items, sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Background);
