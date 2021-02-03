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
import swal from 'sweetalert';

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
  sortProducts,
  points,
}) {
  useEffect(() => {
    getAllProducts();

    if (points.message.error) {
      swal("Ooops", "Somwthing went wrong", "error")
    } else if (points.message.message) {
      swal("Good", points.message.message , "success");

      if (points.message !== "") {
        points.message = "";
      }
    }

  }, [getAllProducts, points.message]);

  const paginatedProducts = usePagination(products.products, 16);
  const splicedProducts = paginatedProducts.currentData();

  return (
    <Container>
      <Top />
      <Header title={"Electronics"} />
      <Menu
        getAllProducts={getAllProducts}
        allProducts={products.products}
        products={paginatedProducts}
        showFilters={true}
      />
      <br></br>
      <Products
        getAllProducts={getAllProducts}
        products={splicedProducts}
        sortProducts={sortProducts}
        points={user.user.points}
        reedemProduct={getPoints}
      />
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
