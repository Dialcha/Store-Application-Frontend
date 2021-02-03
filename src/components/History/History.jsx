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
  let prods = [].slice.call(productsRender).map((product, index) => {
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
        key={index}
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
