import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";
import { CartState } from "../../Context/ProductState";
import "./allProducts.css";

const AllProducts = () => {
  const params = useParams();
  const { categories } = params;
  const { products, dispatch } = CartState();
  const allData = [...products]

  const sortByPrice = (e) => {
    if (e.target.value === "lowToHigh") {
      dispatch({
        type: "SORT",
        sort: products.sort((a, b) => a.price - b.price),
      });
    } else if (e.target.value === "highToLow") {
      dispatch({
        type: "SORT",
        sort: products.sort((a, b) => b.price - a.price),
      });
    } else if (e.target.value === "rating") {
      dispatch({
        type: "SORT",
        sort: products.sort((a, b) => b.rating.rate - a.rating.rate),
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="all_product_header">
        <h3 className="text-center">Best Of {categories}</h3>
        <select className="mx-2" onChange={sortByPrice}>
          <option>Sort</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="rating">Rating: Avg. Cust Review</option>
        </select>
      </div>
      <hr />
      <div className="all_products my-5">
        {allData.map((prod) => {
          if (prod.category === categories) {
            return <SingleProductCard prod={prod} />;
          }
          return prod;
        })}
      </div>
    </>
  );
};

export default AllProducts;
