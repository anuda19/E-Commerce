import React from "react";
import ProductsByCat from "../ProductsByCat/ProductsByCat";
import "./latestProducts.css";

const LatestProducts = () => {
  let box = document.querySelector(".product_cards");
  const prevBtn = () => {
    let width = box.offsetWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const nextBtn = () => {
    let width = box.offsetWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <>
      <ProductsByCat header="Men's Clothing" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="men's clothing"/>
      <ProductsByCat header="Women's Clothing" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="women's clothing"/>
      <ProductsByCat header="Jewellery" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="jewelery" />
      <ProductsByCat header="Electronics" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="electronics" />
    </>
  );
};

export default LatestProducts;
