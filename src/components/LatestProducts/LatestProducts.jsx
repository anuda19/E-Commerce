import ProductsByCat from "../ProductsByCat/ProductsByCat";
import "./latestProducts.css";

const LatestProducts = () => {


  return (
    <>
      <ProductsByCat header="Mobiles" prodCat="mobile"/>
      <ProductsByCat header="Laptops" prodCat="laptop"/>
      <ProductsByCat header="Women's Clothing" prodCat="women's clothing"/>
      <ProductsByCat header="Jewellery" prodCat="jewelery" />
      <ProductsByCat header="Electronics" prodCat="electronics" />
      
    </>
  );
};

export default LatestProducts;
