import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "../Product/Product";

const Container = styled.div`
  display: flex;
  width: 82%;
  flex-wrap: wrap;
  align-self: center;
`;

function renderProducts(productsRender, points, reedemProduct) {
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
      <Product
        key={index}
        photo={newUrl}
        category={product.category}
        name={product.name}
        cost={product.cost}
        points={points}
        reedemProduct={() => reedemProduct(product.productId)}
      ></Product>
    );
  });
  return prods;
}

function Products({
  getAllProducts,
  products,
  reedemProduct,
  user,
  points,
  sortProducts,
}) {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <Container>
      {products === [] ? <div></div> : renderProducts(products, points, reedemProduct)}
    </Container>
  );
}

export default Products;
