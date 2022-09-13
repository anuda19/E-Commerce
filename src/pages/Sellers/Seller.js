import React, { useState } from "react";
import SellerModal from "../../components/Modal/SellerModal";
import Navbar from "../../components/Navbar/Navbar";
import ProductsByCat from "../../components/ProductsByCat/ProductsByCat";
import "./seller.css";

const Seller = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="my-5">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Product
        </button>
        <SellerModal
          showModal={showModal}
          setShowModal={setShowModal}
          header="Add Product"
        />
        <h1>I am seller</h1>
        <ProductsByCat header="Laptops" prodCat="laptop" showIcon={true} />
        <ProductsByCat header="Mobiles" prodCat="mobile" showIcon={true} />
      </div>
    </>
  );
};

export default Seller;
