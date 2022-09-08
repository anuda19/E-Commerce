import React from "react";
// import { Link } from "react-router-dom";
import { CartState } from "../../Context/ProductState";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const ProductsByCat = ({ header, nextBtn, prevBtn, prodCat }) => {
  const { products } = CartState();
  const newData = [...products]
  return (
    <div className="product_carousel my-5">
      <div className="product_header my-2">
        <h4 className="mx-5 p-2">{header}</h4>
      {/* <Link to={`/all-products/${prodCat}`} className="mx-5 px-2">
        View All
      </Link> */}
      </div>
      <button className="pre-btn" onClick={prevBtn}>
        <p>&lt;</p>
      </button>
      <button className="nxt-btn" onClick={nextBtn}>
        <p>&gt;</p>
      </button>
      <hr />
      <div className="product_cards">
        {newData
          ?.filter((val) => {
            return val.category === prodCat;
          })
          .map((prod) => {
            return <SingleProductCard prod={prod} key={prod.id} />;
          })}
      </div>
    </div>
  );
};

export default ProductsByCat;
