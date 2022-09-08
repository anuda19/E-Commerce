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
      <div className="amazon_products">
      <a href="https://www.amazon.in/OnePlus-Bluetooth-Wireless-Earphones-Bombastic/dp/B09TVVGXWS?crid=1HS8TE0GEWARC&keywords=oneplus%2Bbullets%2Bwireless&qid=1662552991&sprefix=oneplus%2Bbullets%2Bwireless%2B%2Caps%2C357&sr=8-2&th=1&linkCode=li2&tag=anurag00ab-21&linkId=1620445254553870a0940d5e3e5a37e9&language=en_IN&ref_=as_li_ss_il" ><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09TVVGXWS&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=anurag00ab-21&language=en_IN" alt="Not Supprted" /></a>
    <h4 className="mx-2">Oneplus Bluetooth Wireless in Earphones with Mic</h4>
    <a href="https://amzn.to/3x4RoOO"><button className="btn btn-primary mx-2">Buy Now</button></a>
      </div>


      <ProductsByCat header="Amazon Products" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="men's clothing"/>
      <ProductsByCat header="Men's Clothing" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="men's clothing"/>
      <ProductsByCat header="Women's Clothing" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="women's clothing"/>
      <ProductsByCat header="Jewellery" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="jewelery" />
      <ProductsByCat header="Electronics" nextBtn={nextBtn} prevBtn={prevBtn} prodCat="electronics" />
      
    </>
  );
};

export default LatestProducts;
