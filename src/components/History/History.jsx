import React from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";

const Container = styled.div`
  display: flex;
  width: 82%;
  flex-wrap: wrap;
  align-self: center;
`;

function renderProducts(productsRender) {
  console.log("La lista de productos :", [].slice.call(productsRender));
  let prods = [].slice.call(productsRender).map((product) => {
    let imgUrl = product.img.url;
    let newUrl = "";
    if (product.img.url.includes("https://aerolab-challenge.now.sh/")) {
      newUrl = imgUrl.replace(
        "https://aerolab-challenge.now.sh/",
        "https://coding-challenge-api.aerolab.co/"
      );
    } else {
      newUrl = imgUrl;
    }
    return (
      <HistoryItem
        photo={newUrl}
        category={product.category}
        name={product.name}
      ></HistoryItem>
    );
  });
  return prods;
}

function History({ products }) {
  return (
    <Container>
      {products === [] ? <div></div> : renderProducts(products)}
    </Container>
  );
}

export default History;
