import React from "react";
import { Modal } from "react-bootstrap";
import { editAmazonProducts } from "../../Api/productsApi";

const SellerEditModal = ({
  showEditModal,
  setShowEditModal,
  selectedProd,
  setSelectedProd,
}) => {
  const handleChangeEdit = (e) => {
    const updatedProduct = { ...selectedProd };
    if (e.target.name === "title") {
      updatedProduct.title = e.target.value;
    } else if (e.target.name === "desc") {
      updatedProduct.desc = e.target.value;
    } else if (e.target.name === "imgUrl") {
      updatedProduct.imgUrl = e.target.value;
    } else if (e.target.name === "category") {
      updatedProduct.category = e.target.value;
    } else if (e.target.name === "productUrl") {
      updatedProduct.productUrl = e.target.value;
    }
    setSelectedProd(updatedProduct);
  };

  const handleEditProduct = async () => {
    const res = await editAmazonProducts(selectedProd._id, selectedProd);
    const { status } = res;
    if (status === 200) {
      console.log(status);
      setShowEditModal(false)
    }
  };
  return (
    <div>
      <Modal show={showEditModal}>
        <Modal.Header>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              name="title"
              value={selectedProd.title}
              onChange={handleChangeEdit}
            />
            <label htmlFor="Decription">Decription</label>
            <input
              type="text"
              name="desc"
              value={selectedProd.desc}
              onChange={handleChangeEdit}
            />
            <label htmlFor="Image Url">Image Url</label>
            <input
              type="text"
              name="imgUrl"
              value={selectedProd.imgUrl}
              onChange={handleChangeEdit}
            />
            <label htmlFor="Category">Category</label>
            <input
              type="text"
              name="category"
              value={selectedProd.category}
              onChange={handleChangeEdit}
            />
            <label htmlFor="ProductUrl">Product Url</label>
            <input
              type="text"
              name="productUrl"
              value={selectedProd.productUrl}
              onChange={handleChangeEdit}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowEditModal(false)}
          >
            Close
          </button>
          <button className="btn btn-primary" 
          onClick={handleEditProduct}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellerEditModal;
