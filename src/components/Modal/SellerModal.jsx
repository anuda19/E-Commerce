import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { addAmazonProducts } from "../../Api/productsApi";

const SellerModal = ({
  showModal,
  setShowModal,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [productUrl, setProductUrl] = useState("");

  const handleAddProduct = async () => {
    const newProduct = { title, desc, imgUrl, category, productUrl };
    const res = await addAmazonProducts(newProduct);
    const { data, status } = res;
    if (status === 201) {
      console.log(data);
    }
    addAmazonProducts();
    console.log(newProduct);
    setShowModal(false);
    setTitle("");
    setDesc("");
    setImgUrl("");
    setCategory("");
    setProductUrl("");
  };

  

  return (
    <div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="Decription">Decription</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <label htmlFor="Image Url">Image Url</label>
              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label htmlFor="Category">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="ProductUrl">Product Url</label>
              <input
                type="text"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
              />
            </form>
        </Modal.Body>
        <Modal.Footer>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleAddProduct}>
                Add
              </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellerModal;
